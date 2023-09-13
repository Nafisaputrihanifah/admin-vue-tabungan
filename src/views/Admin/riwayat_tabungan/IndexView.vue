<template>
    <div class="p-4 sm:ml-64">
      <br /><br /><br />
      <div class="list">
        <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              <i style="font-size: 20px" class="bi bi-house-door-fill"></i>
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6"
              ><i class="bi bi-arrow-right"></i
            ></a>
          </li>
          <li>
                 <button  class="mr-4 hover:underline md:mr-6">Data Siswa</button>>
          </li>
        </ul><br>
      </div>
  
      <b>Data Semua Siswa</b> 
      <a  @click="create_siswa" class="float-right bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn-sm">Tambah Siswa</a> &nbsp;
      <div class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left">
            <thead class="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    No
                  </th>
                    <th scope="col" class="px-6 py-3">
                        Nama
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Kelas
                  </th>
                    <th scope="col" class="px-6 py-3">
                        Uang Masuk
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Uang Keluar
                    </th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tabungan" :key="item.id">
                <td class="px-6 py-4">
                    {{ index+1 }}
                </td>
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
                       {{ item.siswa.nama }}
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
                    {{ item.siswa.kelas }}
               </th>
                  <td class="px-6 py-4">
                    {{ item.uang_masuk }}
                  </td>
                  <td class="px-6 py-4">
                    {{ item.uang_keluar }}
                  </td>
              </tr> 
            </tbody>
        </table>
        {{show}}
      </div>
    </div>
  </template>
  <script>
  import { onMounted } from "vue";
  import { mapActions, mapState } from 'vuex';
  export default {
    data(){
      return{
          siswas:null,
      }
    },
    setup(props, context) {
      onMounted(() => {
        try {
          context.emit("id-menu", 3);
        } catch (error) {
          console.log(error);
        }
      });
    },
    computed:{
      ...mapState('tabungan',['tabungan']),
      ...mapState('siswa',['siswa']),
      show(){
        this.siswa.forEach(element => {
              this.siswas = element
        });
      }

    },
    mounted() {
        this.$store.dispatch("tabungan/fetchtabungan")
        this.$store.dispatch("siswa/fetchsiswa")
    },

  };
  </script>
  