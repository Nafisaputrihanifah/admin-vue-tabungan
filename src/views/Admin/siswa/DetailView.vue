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
             <button  class="mr-4 hover:underline md:mr-6">Edit Siswa</button>
      </li>
    </ul>
  </div>

<br>
  <div class="card shadow-md"><br>
    <form @submit.prevent="editsiswa" class="pr-4 pl-4">   
        <div>
            <label
              for="email"
              class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Masukan Nama </label
            >
            <input type="text" :value="singlesiswa.nama"  disabled class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
        </div>
        <div>
            <label
              for="email"
              class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Masukan kelas</label
            >
            <input type="text"  :value="singlesiswa.kelas" disabled class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
        </div>
        <div>
            <label
              for="email"
              class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Masukan alamat</label
            >
            <input type="text" :value="singlesiswa.alamat" disabled class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
        </div>
        <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button> -->
          
     </form><br>
  </div>
</div>
</template>
<script>

import { onMounted } from "vue";
import { mapActions, mapState } from 'vuex'
export default {
props:['id'],
data(){
    return{
      editsiswas:{
        nama:null,
        kelas:null,
        alamat:null,
        add:null
      }
    }
},
methods:{
    ...mapActions('siswa',['fecteditsiswa']),
    editsiswa(params){
       this.fecteditsiswa(this.editsiswas)
    }
},
computed:{
    ...mapState('siswa',['singlesiswa'])
},
mounted() {
    this.$store.dispatch("siswa/fetchsiswaid", this.id)
},

setup(props, context) {
onMounted(() => {
  try {
    context.emit("id-menu", 2);
  } catch (error) {
    console.log(error);
  }
});
},
}

</script>