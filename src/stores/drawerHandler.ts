import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
// })

export const useDrawerHandler = defineStore('isOpen', {
  state: () => ({
    isOpen: true,
  }),
  actions: {
    drawerHandler() {
      this.isOpen = !this.isOpen;
    },
  },
})