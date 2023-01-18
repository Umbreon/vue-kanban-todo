import { defineStore} from 'pinia';

export const useTeamStore = defineStore('team', {
    state: () => ({ // TODO Team Model is required
        team: [
            {
                id: 1001,
                username: "Ugyrzlu",
            },
            {
                id: 1002,
                name: "Biggus Danielus",
                profileImg: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            },
            {
                id: 1005,
                username: "Narshima",
            },
            {
                id: 1004,
                username: "Hiranya",
            }
        ],
     }),
    getters: {
      getTeam: (state) => state.team,
    },
    actions: {
        setTeam(team) {
            this.team = team;
        },
    },
  })