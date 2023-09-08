<template>
    <div>
        detail 
        {{ id }}
        {{ singlesiswa }}
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props:['id'],
    computed:{
        ...mapState('siswa',['singlesiswa'])
    },
    mounted() {
        this.$store.dispatch("siswa/fetchsiswaid", this.id)
  },
}

</script>