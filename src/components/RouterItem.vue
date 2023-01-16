<template>
  <router-link :to="item.path">
    <a-row class="sidebar__item" type="flex">
      <a-col flex="4" class="svg_container">
        <component :is="item.meta.icon" />
      </a-col>
      <a-col :flex="item.meta.notification ? '16' : '20'">
        {{ item.name }}
      </a-col>
      <a-col v-if="item.meta.notification" flex="4">
        <a-button type="primary"> 7 </a-button>
      </a-col>
    </a-row>
  </router-link>
</template>

<script>
export default {
  name: "RouterItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
