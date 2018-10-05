const data = {
  store: {
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
  }
};

const vue = new Vue({
  el: '#root',
  data: data,
  created: function() {
    fetch(`${window.origin}/shops/${window.shop}`)
      .then(res => res.json())
      .then(res => {
        this.store = { ...this.store, ...res.data };
      });
  },
  computed: {
    firstDiscount: function() {
      return Math.max(
        0,
        1 -
          this.store.settings.discounts.codes
            .map(discount => Number(discount.chance))
            .filter(chance => !isNaN(chance))
            .reduce((prev, chance) => prev + chance, 0)
      ).toFixed(1);
    }
  },
  methods: {
    activate: function() {
      fetch(`${window.origin}/shops/${this.shop._id}`, {
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
        this.store.settings.published = true;
      });
    },
    deactivate: function() {
      fetch(`${window.origin}/shops/${this.shop._id}`, {
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
        this.store.settings.published = false;
      });
    },
    saveCustomizations: function() {
      fetch(`${window.origin}/shops/${this.shop._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
          settings: {
            customization: this.store.settings.customization
          }
        }
      });
    },
    addDiscount: function() {
      this.store.settings.discounts.codes.push({ code: '', chance: 0.2 });
    },
    removeDiscount: function() {
      if (this.store.settings.discounts.codes.length) {
        this.store.settings.discounts.codes.pop();
      }
    },
    saveDiscounts: function() {
      fetch(`${window.origin}/shops/${this.shop._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: {
          settings: {
            discounts: this.store.settings.discounts
          }
        }
      });
    }
  }
});
