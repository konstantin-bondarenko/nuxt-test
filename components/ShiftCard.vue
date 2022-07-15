<template>
  <v-card class="shift-card">
    <div class="shift-card-title">
      <div>{{shiftCard.title}}</div>
      <v-btn icon @click="editShiftCard(shiftCard.id)"><v-icon>mdi-pen</v-icon></v-btn>
    </div>
    <div class="shift-card-desc">{{shiftCard.description}}</div>
    <div class="shift-card-dates">
      <div class="shift-card-dates-title">Dates</div>
      <div class="shift-card-dates-content">
        <ShiftTime
          v-for="(item, index) of timeCards"
          :key="'shift-time-item-' + index"
          :shift-time="{...item, date: index}" />
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ShiftCard",
  props: {
    shiftCard: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    timeCards() {
      return this.shiftCard?.timeCards
    }
  },
  methods: {
    ...mapActions('Cards', ['editShiftCard'])
  },
}
</script>

<style lang="scss" scoped>
.shift-card {
  padding: 32px 64px;
  color: inherit;

  &-title {
    font-size: 36px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  &-desc {
    font-size: 24px;
  }

  &-dates {
    &-title {
      font-size: 36px;
      font-weight: 600;
      margin: 12px 0;
    }
    &-content {
      display: grid;
      grid-gap: 20px;
    }
  }
}
</style>
