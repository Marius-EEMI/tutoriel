<template>
  <img :src="src" :alt="alt" />
</template>

<script lang="ts">
export default {
  name: 'TutoImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
img {
  margin-left: auto;
  margin-right: auto;
}
</style>
