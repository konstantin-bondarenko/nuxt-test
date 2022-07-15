<template>
  <div class="shift-time">
    <div>{{shiftTime.date}}</div>
    <div>{{shiftTime.start}}</div>
    <div>{{shiftTime.end}}</div>
    <div class="flex-grow-1">{{shiftTime.select}}</div>
    <div v-if="shiftTime.price"><v-icon color="#fff">mdi-currency-eur</v-icon>{{shiftTime.price}}</div>
  </div>
</template>

<script>
export default {
  name: 'ShiftTime',
  props: {
    shiftTime: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style lang="scss" scoped>
.shift-time {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  background: #484848;
  color: #fff;
  border-radius: 6px;
  padding: 20px 32px;
}
</style>
