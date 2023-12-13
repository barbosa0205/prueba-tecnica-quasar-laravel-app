<template lang="">
  <q-btn  outline :size="size"  padding="10px 20px" color="primary  " />
</template>
<script setup>
  defineProps({
    size: {
      type: String,
      default: 'lg'
    }
  })
</script>
<style lang="">

</style>
