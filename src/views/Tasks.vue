<template>
  <div class="pdh-80" v-if="sectionStore.sections.length > 0">
    <a-row class="section-add" type="flex" :gutter="8">
      <a-col>
        <a-button type="primary">Add New Section</a-button>
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
        <a-row class="task-add" type="flex" align="middle">
          <a-col span="12">
            <span>{{ section.title }}</span>
          </a-col>
          <a-col span="12">
            <a-button type="primary" style="float: right">Add Task</a-button>
          </a-col>
        </a-row>
        <a-row>
          <draggable
            class="task-container"
            v-model="section.tasks"
            group="tasks"
            @start="drag = true"
            @end="drag = false"
          >
            <div v-for="task in section.tasks" :key="task.id">
              <a-card :title="task.title">
                <a-row class="task-created" type="flex" :gutter="[8, 0]">
                  <a-col class="task-created-date">
                    <span>{{ task.createDate | formatDate }}</span>
                  </a-col>
                  <a-col>
                    <span>•</span>
                  </a-col>
                  <a-col class="task-created-by">
                    <span>{{ "Created by " }}</span
                    ><span class="task-created-by__bold">{{
                      task.createdBy.username
                    }}</span>
                  </a-col>
                </a-row>
                <a-row v-if="task.description">
                  <a-col class="task-description">
                    <div v-html="task.description" />
                  </a-col>
                </a-row>
                <a-row
                  v-if="task.attachments.length"
                  class="task-attachments"
                  type="flex"
                  :gutter="[8, 0]"
                >
                  <a-col
                    v-for="attachment in task.attachments"
                    :key="attachment.id"
                  >
                    <a-icon :type="attachment.type" />
                    <span>{{ attachment.name | truncate(13) }}</span>
                  </a-col>
                </a-row>
                <a-row class="task-tags" type="flex">
                  <a-col v-for="tag in task.tags" :key="tag.id">
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
                  :justify="task?.comments?.length ? 'space-between' : 'end'"
                >
                  <a-col v-if="task?.comments?.length">
                    <a-icon type="message" />
                    <span> {{ task.comments.length }}</span>
                  </a-col>
                  <a-col v-if="task?.assignedTo">
                    <a-card-meta>
                      <template slot="avatar">
                        <div v-for="user in task.assignedTo" :key="user.id">
                          <a-avatar
                            v-if="user.profileImg"
                            :src="user.profileImg"
                          />
                          <a-avatar v-else>{{
                            user.username[0] || ""
                          }}</a-avatar>
                        </div>
                      </template>
                    </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
            </div>
          </draggable>
        </a-row>
      </div>
    </draggable>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useSectionStore } from "@/stores/section";

export default {
  name: "Tasks",
  computed: {
     ...mapStores(useSectionStore),
  },
  data(){
    return {
      test: 1,
    }
  },
  mounted() {},
  methods: {},
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

.task {
  &-add {
    padding-block-end: 32px;

    span {
      font-weight: 700;
      font-size: 15px;
      letter-spacing: -0.0075em;
      color: #667085;
    }
  }

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
