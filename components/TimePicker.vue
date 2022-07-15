<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290"
    min-width="290">
    <template #activator="{ on, attrs }">
      <v-text-field
        :value="localValue"
        placeholder="Time"
        append-icon="mdi-clock-time-four-outline"
        readonly
        outlined solo
        style="width: 125px;"
        v-bind="attrs"
        v-on="on" />
    </template>
    <v-time-picker
      :value="time"
      format="24hr"
      full-width
      @input="onInput" />
  </v-menu>
</template>

<script>
export default {
  name: 'TimePicker',
  props: {
    time: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    localValue: {
      get() {
        return this.time
      },
      set(v) {
        return v
      }
    }
  },
  methods: {
    onInput(v) {
      this.menu = false
      this.$emit('update:time', v)
    }
  }
}
</script>
