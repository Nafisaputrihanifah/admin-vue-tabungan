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
        </ul>
      </div>
  
   
      <div class="card shadow-md">
        <form @submit.prevent="addsiswa" method="post">
          <input type="text" v-model="addsiswas.nama" placeholder="nama">
          <input type="text" v-model="addsiswas.kelas" placeholder="kelas">
          <input type="text" v-model="addsiswas.alamat" placeholder="alamat">
          <button>klik</button>
      </form>
      </div>
    </div>
  </template>
  <script>
import { onMounted } from "vue";
import { mapActions } from 'vuex';
export default {

    data(){
        return{
          addsiswas:{
            nama:null,
            kelas:null,
            alamat:null,
            add:null
          }
        }
    },
    methods:{   
      ...mapActions('siswa',['fetchsiswaadd']),
        addsiswa(){
              this.fetchsiswaadd(this.addsiswas)
        }
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
  