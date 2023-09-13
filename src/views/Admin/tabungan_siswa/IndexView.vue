<template>
    <ul>
        <li v-for="item in tabungansiswa" :key="item.id">
             <div v-if="item.id_siswa == id"> 
              masuk  {{ item.uang_masuk }}
               keluar  {{ item.uang_keluar }}
                {{ show }}
             </div>
        </li>
        {{ sub }}
    </ul>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    props:['id'],
    data(){
        return{
            sub:null,
        }
    },
    computed:{
        ...mapState('tabungan',['tabungansiswa']),
    },
    mounted() {
        this.$store.dispatch("tabungan/fecttabungan")
  },
}
</script>