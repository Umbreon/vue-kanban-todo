import { defineStore } from 'pinia';

export const useSectionStore = defineStore('section', {
    state: () => ({
        sections: [
          {
            id: 1,
            title: "TO DO",
            tasks: [
              {
                title: "Make a Kanban App",
                createDate: new Date("2022-01-12"),
                createdBy: {
                  id: 1003,
                  username: "Prahlad",
                },
                assignedTo: [
                  {
                    id: 1001,
                    username: "Ugyrzlu",
                  },
                  {
                    id: 1002,
                    name: "Biggus Danielus",
                    profileImg:
                      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                  },
                ],
                description: `<span>Please use trello and designs in Dribble as reference. And carry on...</span><img src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'/>`,
                tags: [
                  {
                    id: 1,
                    color: "#475467",
                    bgColor: "#F2F4F7",
                    type: "Design",
                  },
                  {
                    id: 2,
                    color: "#12B76A",
                    bgColor: "#D1FADF",
                    type: "Development",
                  },
                ],
                attachments: [
                  {
                    id: 1,
                    type: "link",
                    name: "docs.google.com/1234abcd.docx",
                  },
                  {
                    id: 2,
                    type: "paper-clip",
                    name: "main.psd",
                  },
                ],
                comments: [
                  {
                    id: 1,
                  },
                  {
                    id: 2,
                  },
                  {
                    id: 3,
                  },
                ],
              },
              {
                title: "Fix his kid through any means",
                createDate: new Date("2022-01-12"),
                createdBy: {
                  id: 1004,
                  username: "Hiranya",
                },
                assignedTo: [
                  {
                    id: 1001,
                    username: "Ugyrzlu",
                  },
                  {
                    id: 1002,
                    name: "Biggus",
                    profileImg:
                      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                  },
                ],
                tags: [],
                attachments: [],
                comments: [
                  {
                    id: 4,
                  },
                  {
                    id: 5,
                  },
                  {
                    id: 6,
                  },
                ],
              },
              {
                title: "Share it with friends",
                createDate: new Date("2022-01-12"),
                createdBy: {
                  id: 1003,
                  username: "Prahlad",
                },
                assignedTo: [
                  {
                    id: 1001,
                    username: "Ugyrzlu",
                  },
                  {
                    id: 1002,
                    name: "Biggus",
                    profileImg:
                      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                  },
                ],
                tags: [],
                attachments: [],
                comments: [
                  {
                    id: 7,
                  },
                  {
                    id: 8,
                  },
                  {
                    id: 9,
                  },
                  {
                    id: 10,
                  },
                  {
                    id: 11,
                  },
                  {
                    id: 12,
                  },
                  {
                    id: 13,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            title: "DOING",
            tasks: [
              {
                title: "Share the links for inspiration",
                createDate: new Date("2022-01-12"),
                createdBy: {
                  id: 1004,
                  username: "Hiranya",
                },
                assignedTo: [
                  {
                    id: 1002,
                    username: "Biggus",
                    profileImg:
                      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                  },
                ],
                tags: [
                  {
                    id: 1,
                    color: "#475467",
                    bgColor: "#F2F4F7",
                    type: "Design",
                  },
                  {
                    id: 2,
                    color: "#12B76A",
                    bgColor: "#D1FADF",
                    type: "Development",
                  },
                ],
                attachments: [
                  {
                    id: 1,
                    type: "link",
                    name: "dribble.com/1234abcd.docx",
                  },
                  {
                    id: 2,
                    type: "paper-clip",
                    name: "main.psd",
                  },
                ],
                comments: [
                  {
                    id: 14,
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            title: "DONE",
            tasks: [
              {
                title: "Treatment by Fire",
                createDate: new Date("2022-01-12"),
                createdBy: {
                  id: 1005,
                  username: "Narshima",
                },
                assignedTo: [
                  {
                    id: 1002,
                    username: "Biggus",
                    profileImg:
                      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                  },
                ],
                tags: [
                  {
                    id: 1,
                    color: "#475467",
                    bgColor: "#F2F4F7",
                    type: "Design",
                  },
                ],
                attachments: [],
                comments: [
                  {
                    id: 15,
                  },
                  {
                    id: 16,
                  },
                  {
                    id: 17,
                  },
                  {
                    id: 18,
                  },
                  {
                    id: 19,
                  },
                  {
                    id: 20,
                  },
                  {
                    id: 21,
                  },
                  {
                    id: 22,
                  },
                ],
              },
              {
                title: "Use Elephants and Snakes",
                createDate: new Date("2022-01-12"),
                createdBy: {
                  id: 1003,
                  username: "Kumar",
                },
                assignedTo: [],
                tags: [],
                attachments: [],
              },
            ],
          },
        ] 
    }),
    getters: {
      getSections: (state) => state.sections,
    },
  })