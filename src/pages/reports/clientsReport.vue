<script>
import VGrid from "@revolist/vue3-datagrid";
import ReportDrawerMenu from "~/components/DrawerMenu/ReportDrawerMenu.vue";
import ReportDrawer from "~/components/DrawerMenu/ReportDrawer.vue";

export default {
  props: {
    name: "{{ $t('hello') }}"
  },
  name: "App",
  components: {
    VGrid,
    ReportDrawerMenu,
    ReportDrawer
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
          // columnTemplate: (createElement, column) => {
          //   return createElement('span', {
          //     style: {
          //       color: '#666666',
          //     },
          //   }, column.name);
          // },
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
      // for(let i = 0; i < columns.length; i++) {

      // }
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
  <Transition appear>

  <div style="display: flex; flex-direction: row;">
    <ReportDrawer />

    <section class="py-8 tableSection min-[320px]:overflow-auto lg:overflow-hidden">
    <div id="app" class="container px-4">
          <div class="table pt-6 bg-white shadow rounded">
            <!-- <div style="height: 60px; padding: 10px; background-color: white; border-bottom: 1px solid lightgray">
              <h1 style="font-weight: 700; font-size: 1.25rem; line-height: 1.75rem; padding: 10px">Klantenrapport</h1>
            </div> -->
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

  </div>
  </Transition>
</template>

<style>
#app {
  /* margin: auto; */
  /* margin-top: 25px; */
  /* padding-left: 340px; */

}

.table {
  border-radius: 5px;
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
  /* margin: 20px; */
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
