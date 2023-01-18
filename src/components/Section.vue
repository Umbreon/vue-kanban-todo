<template>
  <div>
    <a-row class="task-add" type="flex" align="middle">
      <a-col span="12">
        <span contenteditable @input="updateTitle($event, sectionId)">{{
          sectionStore.getSection(sectionId).title
        }}</span>
      </a-col>
      <a-col span="12">
        <a-button
          type="primary"
          style="float: right"
          @click="addTask(sectionId)"
          >Add Task</a-button
        >
      </a-col>
    </a-row>
    <a-row>
      <draggable
        class="task-container"
        v-model="sectionStore.getSection(sectionId).tasks"
        group="tasks"
        @start="drag = true"
        @end="drag = false"
      >
        <div v-for="task in sectionStore.getSection(sectionId).tasks" :key="task.id">
          <Task :sectionId="sectionId" :taskId="task.id" />
        </div>
      </draggable>
    </a-row>
  </div>
</template>

<script>
import Task from "../components/Task.vue";
import dayjs from "dayjs";
import { mapStores, mapWritableState } from "pinia";
import { useSectionStore } from "../stores/section";

export default {
  name: "Section",
  components: {
    Task,
  },
  props: {
    sectionId: {
      type: Number,
    },
  },
  computed: {
    ...mapStores(useSectionStore),
    ...mapWritableState(useSectionStore, ["section"]),
  },
  methods: {
    addTask(sectionId) {
      //TODO Second Parameter might be a task from a factory and injected through a popup
      const task = {
        title: "Dummy Task",
        createDate: dayjs(),
        createdBy: {
          id: 1006,
          username: "Evan You",
        },
        assignedTo: [],
        tags: [],
        attachments: [],
        comments: [],
      };

      this.sectionStore.addTask(sectionId, task);
    },
    updateTitle(e, sectionId) {
      const inputText = e.target.innerText;
      this.sectionStore.setSectionTitle(sectionId, inputText);
    },
  },
};
</script>
<style lang="scss" scoped>
.task {
  &-add {
    padding-block-end: 32px;
    min-width: 320px;

    span {
      font-weight: 700;
      font-size: 15px;
      letter-spacing: -0.0075em;
      color: #667085;
    }
  }
}
</style>
