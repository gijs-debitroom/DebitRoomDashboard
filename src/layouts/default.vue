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
    <Transition>
      <Drawersmall v-if="isOpen"/>
    </Transition>
  </aside>
  <!-- onderstand moet bij mobiel de padding uitstaan -->
  <Transition appear>
    <main class="flex-1 h-screen" :style="isOpen ? 'padding-left: 80px' : 'padding-left: 0px'">
      <Navbar />
      <section class="bg-pageBackgroundColor dark:bg-dark-pageBackgroundColor" style="height: 100%">
        <slot />
      </section>
    </main>
  </Transition>

</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>