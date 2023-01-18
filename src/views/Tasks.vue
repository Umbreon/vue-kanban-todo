<template>
  <div class="pdh-80">
    <a-row class="section-add" type="flex" :gutter="8">
      <a-col>
        <a-button type="primary" @click="addSection()"
          >Add New Section</a-button
        >
      </a-col>
      <a-col>
        <a-button type="primary" @click="clearSections()"
          >Clear Empty Sections</a-button
        >
      </a-col>
    </a-row>
    <draggable
      class="section-container"
      v-model="sectionStore.sections" 
      group="sections"
      @start="drag = true"
      @end="drag = false"
    >
      <div v-for="section in sectionStore.getSections" :key="section.id">
        <Section :sectionId="section.id" />
      </div>
    </draggable>
  </div>
</template>

<script>
import Section from "../components/Section.vue";

import { mapStores, mapWritableState } from "pinia";
import { useSectionStore } from "../stores/section";

export default {
  name: "Tasks",
  components: {
    Section,
  },
  computed: {
    ...mapStores(useSectionStore),
    ...mapWritableState(useSectionStore, ["section"]),
  },
  methods: {
    addSection() {
      const section = {
        id: 4, //TODO There can be a factory for all section and tasks or some service call for references.
        title: "Dummy Section",
        tasks: [],
      };
      this.sectionStore.addSection(section);
    },
    clearSections() {
      this.sectionStore.clearSections();
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
  &-add {
    padding: 24px 0;
  }
  &-container {
    display: flex;
    gap: 36px;
  }
}
</style>
