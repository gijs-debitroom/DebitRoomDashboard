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
  <section class="py-8 tableSection min-[320px]:overflow-auto lg:overflow-hidden">
    <div id="app" class="container px-4">
    <!-- <section class="py-8">
      <div class="container px-4 mx-auto">
        <div class="pt-6 bg-white shadow rounded h-screen"> -->
          <div class="table pt-6 bg-white shadow rounded">
            <!-- <div style="height: 60px; padding: 10px; background-color: white; border-bottom: 1px solid lightgray">
              <h1 style="font-weight: 700; font-size: 1.25rem; line-height: 1.75rem; padding: 10px">Klantenrapport</h1>
            </div> -->
            <div class="px-6 border-b">
              <div class="flex flex-wrap items-center mb-6">
                <h3 class="text-xl font-bold">Klantenrapportage</h3>
                <!-- <a class="ml-auto flex items-center py-2 px-3 text-xs text-white bg-indigo-500 hover:bg-indigo-600 rounded" href="#">
                  <span class="mr-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 8.33337C12.6 8.33337 12.3333 8.60004 12.3333 9.00004V11.6667C12.3333 12.0667 12.0666 12.3334 11.6666 12.3334H2.33331C1.93331 12.3334 1.66665 12.0667 1.66665 11.6667V9.00004C1.66665 8.60004 1.39998 8.33337 0.99998 8.33337C0.59998 8.33337 0.333313 8.60004 0.333313 9.00004V11.6667C0.333313 12.8 1.19998 13.6667 2.33331 13.6667H11.6666C12.8 13.6667 13.6666 12.8 13.6666 11.6667V9.00004C13.6666 8.60004 13.4 8.33337 13 8.33337ZM4.79998 4.13337L6.33331 2.60004V9.00004C6.33331 9.40004 6.59998 9.66671 6.99998 9.66671C7.39998 9.66671 7.66665 9.40004 7.66665 9.00004V2.60004L9.19998 4.13337C9.46665 4.40004 9.86665 4.40004 10.1333 4.13337C10.4 3.86671 10.4 3.46671 10.1333 3.20004L7.46665 0.533374C7.19998 0.266707 6.79998 0.266707 6.53331 0.533374L3.86665 3.20004C3.59998 3.46671 3.59998 3.86671 3.86665 4.13337C4.13331 4.40004 4.53331 4.40004 4.79998 4.13337Z" fill="#AFABF1"></path>
                    </svg>
                  </span>
                  <span>Export</span>
                </a> -->
              </div>
              <!-- <div><a class="inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500" href="#">Incoming</a><a class="inline-block px-4 pb-2 text-sm font-medium text-gray-500 border-b-2 border-transparent" href="#">Invoices</a></div> -->
            </div>
            <!-- <div class="overflow-x-auto"> -->
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

        <!-- </div>
      </div>
    </section> -->


  </div>
  </section>

  <!-- <section class="py-8">
  <div class="container px-4 mx-auto">
    <div class="pt-6 bg-white shadow rounded">
      <div class="px-6 border-b">
        <div class="flex flex-wrap items-center mb-6">
          <h3 class="text-xl font-bold">Recent Transactions</h3>
          <a class="ml-auto flex items-center py-2 px-3 text-xs text-white bg-indigo-500 hover:bg-indigo-600 rounded" href="#">
            <span class="mr-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 8.33337C12.6 8.33337 12.3333 8.60004 12.3333 9.00004V11.6667C12.3333 12.0667 12.0666 12.3334 11.6666 12.3334H2.33331C1.93331 12.3334 1.66665 12.0667 1.66665 11.6667V9.00004C1.66665 8.60004 1.39998 8.33337 0.99998 8.33337C0.59998 8.33337 0.333313 8.60004 0.333313 9.00004V11.6667C0.333313 12.8 1.19998 13.6667 2.33331 13.6667H11.6666C12.8 13.6667 13.6666 12.8 13.6666 11.6667V9.00004C13.6666 8.60004 13.4 8.33337 13 8.33337ZM4.79998 4.13337L6.33331 2.60004V9.00004C6.33331 9.40004 6.59998 9.66671 6.99998 9.66671C7.39998 9.66671 7.66665 9.40004 7.66665 9.00004V2.60004L9.19998 4.13337C9.46665 4.40004 9.86665 4.40004 10.1333 4.13337C10.4 3.86671 10.4 3.46671 10.1333 3.20004L7.46665 0.533374C7.19998 0.266707 6.79998 0.266707 6.53331 0.533374L3.86665 3.20004C3.59998 3.46671 3.59998 3.86671 3.86665 4.13337C4.13331 4.40004 4.53331 4.40004 4.79998 4.13337Z" fill="#AFABF1"></path>
              </svg>
            </span>
            <span>Export</span>
          </a>
        </div>
        <div><a class="inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500" href="#">Incoming</a><a class="inline-block px-4 pb-2 text-sm font-medium text-gray-500 border-b-2 border-transparent" href="#">Invoices</a></div>
      </div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr class="text-xs text-gray-500 text-left">
              <th class="flex items-center pl-6 py-4 font-medium">
                <input class="mr-3" type="checkbox" name="" id="">
                <a class="flex items-center" href="#">
                  <span>Invoice ID</span>
                  <span class="ml-2">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z" fill="#67798E"></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span>Date</span>
                  <span class="ml-2">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z" fill="#67798E"></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span>Description</span>
                  <span class="ml-2">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z" fill="#67798E"></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span>Status</span>
                  <span class="ml-2">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z" fill="#67798E"></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th class="py-4 font-medium">
                <a class="flex items-center" href="#">
                  <span>Descriptions</span>
                  <span class="ml-2">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z" fill="#67798E"></path>
                    </svg>
                  </span>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-xs bg-gray-50">
              <td class="flex items-center py-5 px-6 font-medium">
                <input class="mr-3" type="checkbox" name="" id="">
                <p>M063592DR2</p>
              </td>
              <td class="font-medium">08.04.2021</td>
              <td class="font-medium">Code 5928MD01</td>
              <td>
                <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Completed</span>
              </td>
              <td>$2500.00</td>
            </tr>
            <tr class="text-xs">
              <td class="flex items-center py-5 px-6 font-medium">
                <input class="mr-3" type="checkbox" name="" id="">
                <p>M063592DR2</p>
              </td>
              <td class="font-medium">08.04.2021</td>
              <td class="font-medium">Code 5928MD01</td>
              <td>
                <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Completed</span>
              </td>
              <td>$2500.00</td>
            </tr>
            <tr class="text-xs bg-gray-50">
              <td class="flex items-center py-5 px-6 font-medium">
                <input class="mr-3" type="checkbox" name="" id="">
                <p>M063592DR2</p>
              </td>
              <td class="font-medium">08.04.2021</td>
              <td class="font-medium">Code 5928MD01</td>
              <td>
                <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Completed</span>
              </td>
              <td>$2500.00</td>
            </tr>
            <tr class="text-xs">
              <td class="flex items-center py-5 px-6 font-medium">
                <input class="mr-3" type="checkbox" name="" id="">
                <p>M063592DR2</p>
              </td>
              <td class="font-medium">08.04.2021</td>
              <td class="font-medium">Code 5928MD01</td>
              <td>
                <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Completed</span>
              </td>
              <td>$2500.00</td>
            </tr>
            <tr class="text-xs bg-gray-50">
              <td class="flex items-center py-5 px-6 font-medium">
                <input class="mr-3" type="checkbox" name="" id="">
                <p>M063592DR2</p>
              </td>
              <td class="font-medium">08.04.2021</td>
              <td class="font-medium">Code 5928MD01</td>
              <td>
                <span class="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Completed</span>
              </td>
              <td>$2500.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section> -->
</template>
<!-- <template>
  huhiu
</template> -->
<style>
/* .tableSection {
  overflow-x: auto;
} */

#app {
  margin: auto;
  margin-top: 25px;
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
  box-shadow: none;
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
  border: none!important;
  box-shadow: none;
}


revo-grid revogr-scroll-virtual.vertical {
  width: 0px;
}
</style>
