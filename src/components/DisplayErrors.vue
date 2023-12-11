<template lang="">
  <div v-if="errors?.[props.field]">
    <ul class="" v-for="(nameError, index) in errors[props.field]" :key="index">
      <li class="q-px-sm q-py-xs tw-w-fit tw-rounded-md tw-text-red-700 tw-bg-red-200">{{nameError}}</li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  errors: Object,
  field: String
})
</script>
<style lang="">

</style>
