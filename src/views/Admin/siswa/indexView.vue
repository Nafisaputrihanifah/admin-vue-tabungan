<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li style="color: black;">
          <a href="#" class="mr-4 hover:underline md:mr-6">
            <i style="font-size: 20px" class="bi bi-house-door-fill"></i>
          </a>
        </li>
        <li  style="color: black;">
          <a href="#" class="mr-4 hover:underline md:mr-6"
            ><i class="bi bi-arrow-right"></i
          ></a>
        </li>
        <li  style="color: black;">
               <button  class="mr-4 hover:underline md:mr-6">Data Siswa</button>
        </li>
      </ul><br>
    </div>

    <b>Data Semua Siswa</b> 
    <a  @click="create_siswa" class="float-right bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn-sm">Tambah Siswa</a> &nbsp;
    <div class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left">
          <thead class="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
              <tr>
                <th scope="col" class="px-6 py-3" style="color: black;">
                  No
                </th>
                  <th scope="col" class="px-6 py-3" style="color: black;">
                      Nama
                  </th>
                  <th scope="col" class="px-6 py-3" style="color: black;">
                      Kelas
                  </th>
                  <th scope="col" class="px-6 py-3" style="color: black;">
                      Jurusan
                  </th>
                  <th scope="col" class="px-6 py-3" style="color: black;">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in siswa" :key="item.id">
                <td class="px-6 py-4" style="color: black;">
                    {{ index+1 }}
                </td>
                  <th  style="color: black;" scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
                      {{ item.nama }}
                  </th>
                  <td style="color: black;" class="px-6 py-4">
                    {{ item.kelas }}
                  </td>
                  <td style="color: black;" class="px-6 py-4">
                     <span style="color: black;">{{ item.alamat }}</span>
                  </td>
                  <td style="color: black;" class="px-6 py-4">
                    <router-link :to="'/admin/siswa/tabungan/'+ item.id">
                      <a href="#" @click="tabungans(item.id)" class="bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded btn-sm"><i class="bi bi-wallet"></i></a> &nbsp;
                    </router-link>
                      <router-link :to="'/admin/siswa/edit/'+ item.id">
                      <a href="#"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-sm"><i class="bi bi-pen-fill"></i></a> &nbsp;
                      </router-link>
                      <router-link :to="'/admin/siswa/detail/'+ item.id">
                        <a href="#" @click="details(item.id)" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded btn-sm"><i class="bi bi-eye-fill"></i></a> &nbsp;
                      </router-link>
                      <a href="#" @click="deletes(item.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded btn-sm"><i class="bi bi-trash2"></i></a> &nbsp;
                  </td>
              </tr> 
          </tbody>
      </table>
    </div>
   <!-- {{ console.log(siswa) }} -->
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from 'vuex';
export default {
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 2);
      } catch (error) {
        console.log(error);
      }
    });
  },
  data(){
     return{
       no:0
     }
  },
  computed:{
    ...mapState('siswa',['siswa'])
  },
  mounted() {
        this.$store.dispatch("siswa/fetchsiswa")
  },
  methods:{
    ...mapActions('siswa',['fetchsiswaid']),
    ...mapActions('siswa',['fectsiswadelete']),
    create_siswa(){
       this.$router.push('/admin/siswa/create')
     },
     deletes(params){
      this.fectsiswadelete(params)
     },
     details(params){
      this.fetchsiswaid(params)
     },
     tabungans(params){
         console.log(params)
     },
  }

};
</script>
