<script>
import VGrid from "@revolist/vue3-datagrid";

export default {
  props: {
    name: "{{ $t('hello') }}"
  },
  name: "App",
  components: {
    VGrid,
  },
  data() {
    return {
      columns: [
        {
          prop: "name",
          name: "Naam van bedrijf",
          sortable: true,
          order: 'asc',
          filter: true,
          columnType: 'string',
          size: 250,
          autoSize: true,
        },
        {
          prop: "accountant",
          name: "Accountant",
          sortable: true,
          order: 'asc',
          autoSize: true,
          resize: true,
          autoSize: true,
          columnType: 'string',
          size: 150,
        },
        {
          prop: "totalLoaned",
          name: "Totaal geleend",
          sortable: 'number',
          order: 'asc',
          filter: 'number',
          columnType: 'number',
          autoSize: true,
          size: 200,

        },
        {
          prop: "openloans",
          name: "Openstaande lening",
          sortable: 'number',
          filter: 'number',
          autoSize: true,
          size: 200
        }
      ],
      rows: [
        {
          name: "Jansen.bv",
          accountant: "Deloitte",
          totalLoaned: 455445,
          openloans: 43550
        },
        {
          name: "Bakkerij gerard",
          accountant: "witlox",
          totalLoaned: 455445,
          openloans: 638000
        },
        {
          name: "Animal trading company",
          accountant: "Deloitte",
          totalLoaned: 536363,
          openloans: 344,
        },
        {
          name: "Van mook.bv",
          accountant: "witlox",
          totalLoaned: 563,
          openloans: 10

        },
        {
          name: "Autobedrijf kriesels",
          accountant: "Henry de vries",
          totalLoaned: 2000,
          openloans: 0

        },     
        {
          name: "IG logistics",
          accountant: "Deloitte",
          totalLoaned: 91749469,
          openloans: 477787

        }
      ]
    };
  },
  computed: {
    Addstyling(columns) {
      for(let i = 0; i > columns.length; i++) {
        console.log(columns, "columns")
      }
    }
  },
  methods: {
    Addstyling(columns) {
      for(let i = 0; i > columns.length; i++) {
        console.log(columns, "columns")
      }
    }
  }
};
</script>
<template>
  <ReportDrawerMenu />
  <section class="py-8 tableSection min-[320px]:overflow-auto lg:overflow-hidden" style="margin-left: 20%; width: 79%">
    <div id="app" class="container px-4">
      <div class="table pt-6 bg-white shadow rounded-xl">
        <div class="px-6 border-b">
          <div class="flex flex-wrap items-center mb-6">
            <h3 class="text-xl font-bold">Klantenrapportage</h3>
        
          </div>
        </div>
          <v-grid 
            theme="material"
            :source="rows" 
            :columns="columns" 
            :filter="true" 
            :exporting="true" 
            :row-size="50"
            :canFocus="true"
            :useClipboard="true"
          />
      </div>
    </div>
  </section>
</template>
<style>
#app {
  margin: auto;
  margin-top: 25px;
}

.table {
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 1px 0px 15px 0px #e5e7eb;
  height: 400px;
  width: 78vw;
  background-color: white;
  width: 100%;
  table-layout: auto;
}

revo-grid {
  height: 100%;
}

.header-rgRow.actual-rgRow {
  background-color: white;
  color: #666666;
  box-shadow: none!important;
}

.main-viewport {
  border: none;
}

.vertical-inner {
  background-color: white;
}

.content-wrapper {
  color: black;
  font-size: 13px;
  font-weight: 500;
}


.rgRow {
  box-shadow: none!important;
}


revo-grid revogr-scroll-virtual.vertical {
  width: 0px;
}
</style>
