import { defineStore} from 'pinia';

export const useNotificationStore = defineStore('notification', {
    state: () => ({ // TODO Notification Model is required
        notification: {
            task: 4,
            notification: 7,
            team: 2,
        }
     }),
    getters: {
      getNotifications: (state) => state.notifications,
    },
    actions: {
        setNotifications(notf) {
            this.notifications = notf;
        },
    },
  })