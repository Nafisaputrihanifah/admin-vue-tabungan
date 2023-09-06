<template>
  <div class="p-4 sm:ml-64"><br><br><br>
        apasi 
  </div>
</template>
<script>
import { ref } from "vue";
import { onMounted } from "vue";
export default {
  setup(props, context) {
      onMounted(() => {
          try {
              context.emit("id-menu", 2)
          } catch (error) {
              console.log(error)
          }
      })
  }

}
</script>
