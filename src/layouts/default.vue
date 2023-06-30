<script>
import { useDrawerHandler } from '@/stores/drawerHandler';
export default {
  setup() {
        const store = useDrawerHandler()
        const isOpen = computed(() => store.isOpen);
        return { isOpen };
  },
}
</script>
<template>
  <aside :class="isOpen ? 'block' : 'hidden'">
    <Drawersmall />
  </aside>
  <!-- onderstand moet bij mobiel de padding uitstaan -->
    <main class="flex-1 h-screen" :style="isOpen ? 'padding-left: 80px' : 'padding-left: 0px'">
      <Navbar />
    <section class="bg-pageBackgroundColor dark:bg-dark-pageBackgroundColor h-screen">
      <slot />
    </section>
  </main>
</template>
<style>

</style>