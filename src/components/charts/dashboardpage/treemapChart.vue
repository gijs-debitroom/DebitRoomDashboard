<script>
export default {
  name: 'treemapChart',
  data() {
    return {
      series: [
        {
          name: 'Desktops',
          data: [
            {
              x: 'ABC',
              y: 10
            },
            {
              x: 'DEF',
              y: 60
            },
            {
              x: 'XYZ',
              y: 41
            }
          ]
        },
        {
          name: 'Mobile',
          data: [
            {
              x: 'ABCD',
              y: 10
            },
            {
              x: 'DEFG',
              y: 20
            },
            {
              x: 'WXYZ',
              y: 51
            },
            {
              x: 'PQR',
              y: 30
            },
            {
              x: 'MNO',
              y: 20
            },
            {
              x: 'CDE',
              y: 30
            }
          ]
        }
      ],
      chartOptions: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap'
        },
        title: {
          text: 'Multi-dimensional Treemap',
          align: 'center'
        }
      },
    }
  }
}
</script>
<template>
          <apexchart type="treemap" height="350" :options="chartOptions" :series="series"></apexchart>
</template>
