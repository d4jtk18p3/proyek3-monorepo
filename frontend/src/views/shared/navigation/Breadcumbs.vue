<template>
  <v-breadcrumbs
    class="pa-0"
    :items="breadcrumbItems"
  >
    <template v-slot:divider>
      <div :style="{color: isDark ? currentTheme.onBackground : 'C4C4C4'}">&gt;</div>
    </template>
    <template v-slot:item="{item}">
      <v-breadcrumbs-item
        :disabled="item.disabled"
      >
        <v-btn
          text
          small
          class="font-weight-bold primary--text pa-0"
          :style="item.disabled ? breadcrumbItemDisableStyle : breadcrumbItemEnableStyle"
          @click="onButtonBreadcumbClick(item.href)"
        ><h3>{{item.text}}</h3></v-btn>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  name: "breadcumbs",
  props: {
    breadcrumbItems: {
      type: Array,
      required: false,
      default: () => {
        return [
          {
            text: "Absensi",
            disabled: false,
            href: ""
          },
          {
            text: "Link 1",
            disabled: false,
            href: ""
          },
          {
            text: "Link 2",
            disabled: true,
            href: ""
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor",
      isDark: "theme/getIsDark"
    }),
    breadcrumbItemEnableStyle () {
      return {
        color: this.isDark ? this.currentTheme.colorSecondary : this.currentTheme.onBackground
      }
    },
    breadcrumbItemDisableStyle () {
      return {
        color: this.isDark ? this.currentTheme.onBackground : "#C4C4C4"
      }
    }
  },
  methods: {
    onButtonBreadcumbClick (href) {
      this.$router.push({
        path: href
      })
      this.$router.go(1)
    }
  }
}
</script>
