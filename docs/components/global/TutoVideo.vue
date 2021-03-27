<template>
  <div class="video-container">
    <iframe
        :src="link"
        :title="title"
        allow="picture-in-picture"
        allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TutoVideo',
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.video-container {
  position: relative;
  padding: 50% 0 0 0;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
