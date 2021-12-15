<template>
  <v-card
    :style="{background: bgcolor}"
    class="pa-3"
  >
    <div
      :class="isMobile ? `text-center text-body-1` : `text-center text-h6`"
      :style="{color: currentTheme.onSurface}"
    >{{ kelas }}</div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "KelasItem",
  props: ["kelas", "bgcolor"],
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor"
    }),
    isMobile () {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    }
  }
}
</script>

<style scoped>

</style>
