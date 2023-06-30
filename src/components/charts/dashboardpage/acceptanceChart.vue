<script>
export default {
  name: 'acceptanceChart',
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut',
          height: 350,

        },
        title: {
          text: 'acceptatie',
          align: 'center',
          style: {
            // fontSize: s.fontSize,
            // fontWeight: s.fontWeight,
            // fontFamily: s.fontFamily,
            // color: textColor,
            // paddingTop: '10%'
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }],
        legend: {
          position: 'bottom'
        }
      }
    }
  }
}
</script>
<template>
  <apexchart type="donut" :options="chartOptions" :series="series" height="397"></apexchart>
</template>
