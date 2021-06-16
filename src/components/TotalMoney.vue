<template>
  <div class="py-10 bg-white border-2 my-2 flex justify-center sticky top-0 text-4xl">
    {{ formatedPrice }}
  </div>
</template>

<script>
import { formatter } from '../utils';
export default {
  props: {
    money: {
      type: Number,
    },
  },

  computed: {
    formatedPrice(){
      return formatter.format(this.money)
    }
  }
};
</script>

<style>
</style>