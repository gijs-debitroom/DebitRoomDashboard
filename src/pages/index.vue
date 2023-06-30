<script>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

// export default defineComponent({
//   setup() {
//     // return {
//     //   store: useCounterStore()
//     // }
//     const store = useCounterStore()

//     // ❌ Bad (unreactive):
//     const { count } = store

//     // ✔️ Good:
//     const { count } = storeToRefs(store)

//     return { count }
//   },
// })

export default defineComponent({
  setup() {
    const store = useCounterStore()
    const { increment } = store
    const count = computed(() => store.count)
    return { increment, count }
  },
})
</script>
<template>
  hello
  <p>Counter: {{ count }}</p>
  <button type="button" @click="increment">click</button>
</template>
