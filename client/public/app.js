let data = {
  settings: {
    published: true,
    customization: {
      text: {
        header: 'Pick a card',
        sub_header: 'You could win up to 50% off!'
      }
    },
    discounts: {
      codes: []
    }
  }
};

const vue = new Vue({
  el: '#root',
  data: data,
  created: function() {
    console.log(`${window.origin}/shops/${window.shop}`);
    fetch(`${window.origin}/shops/${window.shop}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  },
  computed: {
    firstDiscount: function() {
      return Math.max(
        0,
        1 -
          this.settings.discounts.codes
            .map(discount => Number(discount.chance))
            .filter(chance => !isNaN(chance))
            .reduce((prev, chance) => prev + chance, 0)
      ).toFixed(1);
    }
  },
  methods: {
    activate: function() {
      fetch(`${window.origin}/shops/${window.shop}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
          settings: {
            published: true
          }
        }
      }).then(() => {
        this.published = true;
      });
    },
    deactivate: function() {
      fetch(`${window.origin}/shops/${window.shop}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
          settings: {
            published: false
          }
        }
      }).then(() => {
        this.published = false;
      });
    },
    saveCustomizations: function() {
      fetch(`${window.origin}/shops/${window.shop}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
          settings: {
            customization: this.settings.customization
          }
        }
      });
    },
    addDiscount: function() {
      this.settings.discounts.codes.push({ code: '', chance: 0.2 });
    },
    removeDiscount: function() {
      if (this.settings.discounts.codes.length) {
        this.settings.discounts.codes.pop();
      }
    },
    saveDiscounts: function() {
      fetch(`${window.origin}/shops/${window.shop}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
          settings: {
            discounts: this.settings.discounts
          }
        }
      });
    }
  }
});
