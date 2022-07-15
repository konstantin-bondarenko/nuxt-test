<template>
  <div class="index-page">
    <div class="index-page-title">
      <div>Shifts</div>
      <v-btn dark color="#484848" @click="toggleSidebar">Add shift</v-btn>
    </div>
    <div class="index-page-cards">
      <ShiftCard
        v-for="(item, index) of shiftCards"
        :key="'shift-card-item-' + index"
        :shift-card="item" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "IndexPage",
  computed: {
    ...mapState('Cards', ['shiftCards'])
  },
  methods: {
    ...mapActions('Ui', ['toggleSidebar'])
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  max-width: 1200px;
  margin: auto;
  padding: 24px 16px;
  color: #484848;


  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    font-size: 36px;
    font-weight: 600;
  }

  &-cards {
    display: grid;
    grid-gap: 20px;
  }
}
</style>
