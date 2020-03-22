<template>
  <div class="popup-container">
    <div class="backdrop"></div>
    <div class="popup">
      <h2>Pick a card</h2>
      <CardGroup />
    </div>
  </div>
</template>

<script>
import CardGroup from './components/CardGroup';

export default {
  name: 'app',
  components: {
    CardGroup
  }
};
</script>

<style lang="scss" scoped>
.popup-container {
  z-index: 9999999999;
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backdrop {
  position: absolute;
  background-color: rgba(black, 0.4);
  width: 100%;
  height: 100%;
}
.popup {
  width: 600px;
  border: 1px solid black;
  padding: 20px;
  background-color: white;
  z-index: 1;
}
</style>

