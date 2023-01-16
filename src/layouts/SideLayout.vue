<template>
  <a-layout>
    <a-layout-sider width="320px">
      <a-menu
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
      >
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title">
            <a-row type="flex" :gutter="[8, 0]">
              <a-col class="svg_container" flex="4">
                <svg>
                  <rect width="1.5rem" height="1.5rem" style="fill: 1D1929" />
                </svg>
              </a-col>
              <a-col flex="20">
                <span class="menu__title">Company</span>
              </a-col>
            </a-row>
          </span>
          <template v-for="route in projectRoutes">
            <a-menu-item :key="route.name">
              <RouterItem :item="route" />
            </a-menu-item>
          </template>
        </a-sub-menu>
        <template v-for="route in commonRoutes">
          <a-menu-item :key="route.name">
            <RouterItem :item="route" />
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import routes from "../router/routes";

import RouterItem from '../components/RouterItem.vue';

export default {
  name: "SideLayout",
  components: { RouterItem },
  data() {
    return {
      routes: routes,
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  computed: {
    commonRoutes: function () {
      return this.routes.filter(route => !route.meta.type)
    },
    projectRoutes: function () {
      return this.routes.filter(route => route.meta.type)
    }
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.sider {
  height: 100%;
}
.sidebar {
  &__item {
    svg {
      color: #667085;
    }
  }
}
</style>
