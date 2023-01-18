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
        <a-button type="primary">
          {{ notificationStore.notification[item.meta.notification] }}
        </a-button>
      </a-col>
    </a-row>
  </router-link>
</template>

<script>
import { mapStores } from "pinia";
import { useNotificationStore } from "@/stores/notifications";

export default {
  name: "RouterItem",
  computed: {
    ...mapStores(useNotificationStore),
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
