
<script>
import numberOfPartnersChart from "/components/charts/dashboardpage/numberOfPartnersChart";
import turnoverChart from "/components/charts/dashboardpage/turnoverChart";
import acceptanceChart from "~/components/charts/dashboardpage/acceptanceChart";
import treemapChart from "~/components/charts/dashboardpage/treemapChart";
import areaChart from "~/components/charts/dashboardpage/areaChart";
import ChartsDrawerMenu from "~/components/DrawerMenu/ChartsDrawerMenu.vue";

export default {
  components: {
    numberOfPartnersChart,
    turnoverChart,
    acceptanceChart,
    treemapChart,
    areaChart,
    ChartsDrawerMenu
  }
}
</script>

<template>
<ChartsDrawerMenu class="h-screen"/>
<Transition appear>
<section class="py-8" style="margin-left: 297px">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="w-full lg:w-1/2 p-4">
        <div class="p-6 bg-white dark:bg-dark-componentColor rounded">
          <treemapChart class="p-14 bg-white dark:bg-dark-componentColor" />

        </div>
      </div>
      <div class="w-full lg:w-1/2 p-4">
        <div class="p-6 bg-white dark:bg-dark-componentColor rounded">
          <areaChart class="p-14 bg-white dark:bg-dark-componentColor" />
        </div>
      </div>
    </div>
  </div>
</section>
</Transition>
<!-- <section class="py-8 bg-pageBackgroundColor dark:bg-dark-pageBackgroundColor">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="w-full lg:w-1/3 p-4">
        <div class="p-6 bg-white dark:bg-dark-componentColor rounded">
          <numberOfPartnersChart class="p-14 bg-white dark:bg-dark-componentColor"/>
        </div>
      </div>
      <div class="w-full lg:w-1/3 p-4">
        <div class="p-6 bg-white dark:bg-dark-componentColor rounded">
          <turnoverChart class="p-14 bg-white dark:bg-dark-componentColor" />
        </div>
      </div>
      <div class="w-full lg:w-1/3 p-4">
        <div class="p-6 bg-white dark:bg-dark-componentColor rounded">
          <acceptanceChart class="p-14 bg-white dark:bg-dark-componentColor" />
        </div>
      </div>
    </div>
  </div>
</section> -->
</template>