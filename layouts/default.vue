<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="sidebar"
      transition="slide-x-reverse-transition"
      right fixed
      temporary
      width="480">
      <CreateForm v-if="isSidebarOpen"/>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
  computed: {
    ...mapGetters('Ui', ['isSidebarOpen']),
    sidebar: {
      get() {
        return this.isSidebarOpen
      },
      set(v) {
        return this.toggleSidebar(v)
      }
    }
  },
  methods: {
    ...mapActions('Ui', ['toggleSidebar'])
  }
}
</script>
