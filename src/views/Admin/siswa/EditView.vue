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
        <form @submit.prevent="editsiswa">            
            <input type="text" v-model="editsiswas.nama" style="border: 1px solid grey;"><br>
            <input   type="text" v-model="editsiswas.kelas"  style="border: 1px solid grey;"><br>
            <input   type="text" v-model="editsiswas.alamat" style="border: 1px solid grey;" >
            <button >klik</button>
         </form>
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