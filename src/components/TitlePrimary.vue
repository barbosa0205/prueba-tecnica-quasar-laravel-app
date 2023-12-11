<template lang="">
<h2 class="tw-text-5xl" :style="`color: ${getPaletteColor(props.color)}`"><slot/></h2>
</template>
<script setup>
import { colors } from 'quasar'

const {getPaletteColor} = colors

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})

</script>
<style lang="">

</style>
