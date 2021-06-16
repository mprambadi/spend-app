<template>
  <div class="bg-white border-2 my-2 justify-center items-centers flex">
    <div class="flex flex-col px-20 py-10">
      <div class="text-center mb-5 text-2xl bold">Your Receipt</div>
      <div v-for="item in items" :key="item.id">
        <div class="flex justify-around text-bold">
          <div class="px-10">{{ item.name }}</div>
          <div class="px-10 flex-1">x {{ item.amount }}</div>
          <div class="px-10 text-green-600 text-bold">
            {{ formatedPrice(item.price) }}
          </div>
        </div>
      </div>

      <hr class="border-black border-2 mt-2" />
      <div class="flex justify-between px-10 text-2xl" >
        <div >Total</div>
        <div>{{ formatedPrice(spend) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatter } from "../utils";
export default {
  props: {
    items: {
      type: Array,
    },
    spend: {
      type: Number,
    },
  },

  methods: {
    formatedPrice(price) {
      return formatter.format(price);
    },
  },
};
</script>

<style>
</style>