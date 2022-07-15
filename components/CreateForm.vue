<template>
  <div class="create-form">
    <div class="create-form-title">Create/Edit</div>
    <v-form ref="form">
      <v-text-field
        v-model="localCard.title"
        outlined solo
        :rules="titleRules"
        placeholder="eg. West Manhatten - dayshifts"
        name="title" />
      <v-textarea
        v-model="localCard.description"
        outlined solo
        placeholder="eg. We are looking for a locum during the holiday season."
        name="description" />
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto">
        <template #activator="{ on, attrs }">
          <v-combobox
            v-model="date"
            label="Picker without buttons"
            append-icon="mdi-calendar"
            readonly
            dense multiple
            outlined solo
            :rules="dateRules"
            v-bind="attrs"
            v-on="on" />
        </template>
        <v-date-picker
          v-model="date"
          multiple
          no-title
          @input="menu = false" />
      </v-menu>
    </v-form>
    <div class="create-form-cards">
      <EditCard
        v-for="(item, index) of localCard.timeCards"
        :key="'edit-card-item-' + index"
        :time-card="item"
        :date="index"
        @update-card="updateTimeCard"
        @remove-card="removeTimeCard" />
    </div>
    <div class="d-flex align-center justify-space-between create-form-btns">
      <v-btn width="48%" @click="deleteCard">Delete</v-btn>
      <v-btn width="48%" color="primary" @click="saveCard">Save</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'CreateForm',
  data() {
    return {
      menu: false,
      initialDates: [],
      localCard: {
        title: '',
        description: '',
        timeCards: {}
      },

      // Validation rules
      titleRules: [
        v => !!v || 'Title is required'
      ],
      dateRules: [
        v => !!v.length || 'At least one date is required'
      ]
    }
  },
  computed: {
    ...mapState('Cards', ['shiftCards', 'currentShiftCard']),
    date: {
      get() {
        return this.initialDates
      },
      set(val) {
        this.initialDates = val.sort((a, b) => new Date(a) - new Date(b))
        this.initialDates.forEach(date => {
          if (!this.localCard.timeCards[date]) {
            this.$set(this.localCard.timeCards, date, {})
          }
        });
      }
    },
    cardData() {
      return {
        id: this.currentShiftCard || JSON.stringify(new Date()),
        ...this.localCard
      }
    }
  },
  mounted() {
    if (this.currentShiftCard) {
      const card = JSON.parse(JSON.stringify(this.shiftCards.find(el => el.id === this.currentShiftCard)))
      Object.assign(this.localCard, card)
      this.initialDates.push(...Object.keys(card.timeCards))
    }
  },
  methods: {
    ...mapActions('Cards', ['addShiftCard', 'updateShiftCard', 'deleteShiftCard']),
    updateTimeCard(index, key, value) {
      this.$set(this.localCard.timeCards[index], key, value)
    },
    removeTimeCard(key) {
      this.initialDates.splice(key, 1)
      this.$delete(this.localCard.timeCards, key)
    },
    saveCard() {
      if (this.$refs.form.validate()) {
        this.addShiftCard(this.cardData)
      }
    },
    deleteCard() {
      this.deleteShiftCard(this.cardData)
    }
  }
}
</script>

<style lang="scss" scoped>
.create-form {
  display: grid;
  grid-template: auto auto 1fr auto / auto;
  max-height: 100vh;
  height: 100%;
  padding: 36px 28px;
  color: #484848;

  &-title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 48px;
  }

  &-cards {
    overflow: auto;
    display: flex;
    gap: 12px;
    flex-direction: column;
  }

  &-btns {
    gap: 20px;
  }
}
</style>
