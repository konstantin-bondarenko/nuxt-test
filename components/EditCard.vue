<template>
  <div class="edit-card">
    <div class="d-flex align-center justify-space-between">
      <div>{{ date }}</div>
      <v-btn icon @click="$emit('remove-card', date)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-card color="#484848" class="edit-card-content">
      <div class="d-flex align-center justify-space-between edit-card-content-time">
        <div>
          <div>Start time</div>
          <TimePicker :time.sync="start" />
        </div>
        <div>
          <div>End time</div>
          <TimePicker :time.sync="end" />
        </div>
        <div>
          <div>Price</div>
          <v-text-field
            v-model="price"
            placeholder="Price"
            outlined solo
            style="width: 125px;"
            append-icon="mdi-currency-eur"/>
        </div>
      </div>
      <div>
        <div>Type</div>
        <v-select
          v-model="select"
          :items="items"
          placeholder="Select type"
          solo
          outlined
        />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EditCard',
  props: {
    timeCard: {
      type: Object,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      items: ['Consultation', 'Telephone', 'Ambulance'],
    }
  },
  computed: {
    start: {
      get() {
        return this.timeCard?.start || ''
      },
      set(v) {
        this.updateCard('start', v)
      }
    },
    end: {
      get() {
        return this.timeCard?.end || ''
      },
      set(v) {
        this.updateCard('end', v)
      }
    },
    price: {
      get() {
        return this.timeCard?.price || ''
      },
      set(v) {
        this.updateCard('price', v)
      }
    },
    select: {
      get() {
        return this.timeCard?.select || null
      },
      set(v) {
        this.updateCard('select', v)
      }
    }
  },
  methods: {
    updateCard(key, value) {
      this.$emit('update-card', this.date, key, value)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-card {
  &-content {
    color: #fff;
    padding: 12px 8px;

    &-time {
      gap: 8px;
    }
  }
}
</style>
