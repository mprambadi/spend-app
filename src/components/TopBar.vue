<template>
  <div class="bg-white border-2 py-2">
    <div class="flex justify-center">
      <img :src="me?.image" class="object-contain h-32 rounded-full" />
    </div>
    <div class="text-4xl mt-2 text-center">{{ me?.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    me: {
      type: Object,
    },
  },
};
</script>

<style>
</style>