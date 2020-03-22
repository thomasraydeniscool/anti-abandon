<template>
  <div class="card-group">
    <Card v-for="(card, index) in cards" :key="index" :text="card.text" :show="card.show" @click.native="onClick(index)" />
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'CardGroup',
  components: {
    Card
  },
  data: function() {
    return {
      discounts: [
        { text: '50% off', code: 'POO50', chance: 0.5 },
        { text: '20% off', code: 'PISS20', chance: 0.2 },
        { text: '10% off', code: 'HELLO10', chance: 0.2 }
      ],
      cards: [
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ]
    };
  },
  methods: {
    onClick: function(index) {
      const discount = getDiscount(this.discounts);
      console.log(discount.text);
      // setTimeout(() => {
      //   this.cards.forEach((card, i) => {
      //     if (i === index) {
      //       return;
      //     }
      //     this.cards[i].show = true;
      //   });
      // }, 1000);
    }
  }
};

function getDiscount(discounts) {
  let result = discounts[discounts.length - 1];

  let weight = 0;
  discounts.forEach((discount, index) => {
    weight += discount.chance;
  });

  let target = Math.random() * weight;

  discounts.some((discount, index) => {
    target -= discount.chance;
    if (target < 0) {
      result = discount;
      return true;
    }
  });

  return result;
}
</script>

<style lang="scss" scoped>
.card-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

