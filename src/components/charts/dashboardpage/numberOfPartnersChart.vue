
<script>
export default {
  name: 'numberOfPartnerChart',
  data() {
    return {
      options: {
        chart: {
          toolbar: { show: true },
          id: 'vuechart-example',
          type: 'bar'
        },
        title: {
          text: 'cumulatief aantal partners',
          align: 'center'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        tooltip: {
          theme: 'light',
          fillSeriesColor: false
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81]
        }
      ]
    }
  }
}
</script>
<template>
  <apexchart :series="series" :options="options" height="350"/>
</template>