import { defineStore} from 'pinia';
import { useSectionStore } from './section';

export const useTaskStore = defineStore('task', {
    state: () => ({
      tasks: []
    }),
    getters: {
      getTask(state){
        const sectionStore = useSectionStore();
        return (sectionId, taskId) => sectionStore.sections.find(s => s.id === sectionId)?.tasks.find(t => t.id === taskId); 
      }
    },
  })