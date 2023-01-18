<template>
  <a-card :title="taskStore.getTask(sectionId,taskId).title">
    <a-icon
      slot="extra"
      type="delete"
      @click="deleteTask(sectionId, taskId)"
    />
    <a-row class="task-created" type="flex" :gutter="[8, 0]">
      <a-col class="task-created-date">
        <span>{{ taskStore.getTask(sectionId,taskId).createDate | formatDate }}</span>
      </a-col>
      <a-col>
        <span>•</span>
      </a-col>
      <a-col class="task-created-by">
        <span>{{ "Created by " }}</span
        ><span class="task-created-by__bold">{{
          taskStore.getTask(sectionId,taskId).createdBy.username
        }}</span>
      </a-col>
    </a-row>
    <a-row v-if="taskStore.getTask(sectionId,taskId).description">
      <a-col class="task-description">
        <div v-html="taskStore.getTask(sectionId,taskId).description" />
      </a-col>
    </a-row>
    <a-row
      v-if="taskStore.getTask(sectionId,taskId).attachments.length"
      class="task-attachments"
      type="flex"
      :gutter="[8, 0]"
    >
      <a-col v-for="attachment in taskStore.getTask(sectionId,taskId).attachments" :key="attachment.id">
        <a-icon :type="attachment.type" />
        <span>{{ attachment.name | truncate(13) }}</span>
      </a-col>
    </a-row>
    <a-row class="task-tags" type="flex">
      <a-col v-for="tag in taskStore.getTask(sectionId,taskId).tags" :key="tag.id">
        <a-tag :color="tag.bgColor"
          ><p :style="`color:${tag.color}`">
            {{ tag.type }}
          </p></a-tag
        >
      </a-col>
    </a-row>
    <a-row
      class="task-actions"
      type="flex"
      align="middle"
      :justify="taskStore.getTask(sectionId,taskId).comments.length ? 'space-between' : 'end'"
    >
      <a-col v-if="taskStore.getTask(sectionId,taskId).comments.length">
        <a-icon type="message" />
        <span> {{ taskStore.getTask(sectionId,taskId).comments.length }}</span>
      </a-col>
      <a-col v-if="taskStore.getTask(sectionId,taskId).assignedTo">
        <a-card-meta>
          <template slot="avatar">
            <div v-for="user in taskStore.getTask(sectionId,taskId).assignedTo" :key="user.id">
              <a-avatar v-if="user.profileImg" :src="user.profileImg" />
              <a-avatar v-else>{{ user.username[0] || "" }}</a-avatar>
            </div>
          </template>
        </a-card-meta>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import { mapStores, mapWritableState } from "pinia";
import { useSectionStore } from "../stores/section";
import { useTaskStore } from "../stores/task";

export default {
  name: "Task",
  props: {
    sectionId: {
      type: Number,
    },
    taskId: {
      type: Number,
    },
  },
  computed: {
    ...mapStores(useTaskStore),
    ...mapWritableState(useSectionStore, ["section"]),
  },
  methods: {
    deleteTask(sectionId, taskId) {
      this.sectionStore.deleteTask(sectionId, taskId);
    },
  },
};
</script>
<style lang="scss" scoped>
.task {
  &-attachments span {
    font-size: 15px;
    font-weight: 500;
  }

  &-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &-created {
    padding-block-end: 0.5rem;
    &-date {
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: -0.02em;
      color: #98a2b3;
    }
    &-by {
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: -0.02em;
      color: #98a2b3;
      &__bold {
        color: #667085;
      }
    }
  }

  &-description div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
