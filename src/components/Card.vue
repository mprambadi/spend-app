<template>
  <div class="flex flex-col items-center border-2 px-2 py-2">
    <img class="h-3/4 my-2" :src="item.image" />
    <div>{{ item.name }}</div>
    <div>{{ formatedPrice }}</div>

    <div class="flex">
      <button
        class="px-2 py-2 w-1/4 text-center text-black-100"
        :class="item.amount == 0 ? 'text-gray-500 bg-gray-100' : 'bg-red-400'"
        @click="item.amount > 0 && item.amount--"
      >
        Sell
      </button>

      <input
        type="text"
        class="border-2 mx-2 w-2/4 text-center"
        v-model="item.amount"
        @input="onlyText"
      />
      <button
        class="px-2 py-2 w-1/4 text-center text-black-100"
        @click="item.amount++"
        :class="
          totalSpend < Number(item.price)
            ? 'text-gray-500 bg-gray-100'
            : 'bg-green-400 '
        "
        :disabled="totalSpend < item.price"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
import { formatter } from "../utils";

export default {
  props: {
    item: {
      type: Object,
    },
    items: {
      type: Array,
    },
    totalItem: {
      type: Object,
    },
    spend: {
      type: Number,
    },
    totalSpend: {
      type: Number,
    },
    totalLength: {
      type: Number,
    },
    money: {
      type: Number,
    },
  },

  computed: {
    formatedPrice() {
      return formatter.format(this.item.price);
    },
  },
  methods: {
    onlyText() {
      if (this.totalSpend <= 0) {
        if (this.totalLength === 1) {
          this.item.amount = (this.spend + this.totalSpend) / this.item.price;
          return;
        }
        if (this.totalLength > 1) {
          const totalSpendWithoutThisItem = this.items
            .filter((item) => item.id !== this.item.id)
            .reduce((a, b) => a + b.price * b.amount, 0);

          const currentSpend = this.money - totalSpendWithoutThisItem;
          if (this.totalSpend < this.item.price) {
            const amount = currentSpend / this.item.price;

            if (amount < 1) {
              this.item.amount = 0;
              return;
            }

            this.item.amount = Math.floor(amount);

            return;
          }

          this.item.amount = this.spend / this.item.price;
          return;
        }
      }
      this.item.amount = this.item.amount.replace(/[A-z]/g, "");
    },
  },
};
</script>

<style>
</style>