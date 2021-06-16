<template>
  <div class="container mx-auto max-w-screen-lg mt-10 mx-2">
    <top-bar :me="me" />
    <total-money :money="totalSpend" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 justify-center"
    >
      <card
        v-for="n in items"
        :key="n.id"
        :item="n"
        :items="items"
        :totalSpend="totalSpend"
        :totalLength="totalLength"
        :money="money"
        :totalItem="total"
        :spend="spend"
      />
    </div>

    <receipt :items="itemsAdded" :spend="spend" />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import TopBar from "./components/TopBar.vue";
import TotalMoney from "./components/TotalMoney.vue";
import Receipt from "./components/Receipt.vue";
import ParseSpreadsheet from "./utils";
import { LIST_DATA, USER_ME } from "./api";
import ApiCall from "./api";

export default {
  name: "App",
  components: {
    Card,
    TopBar,
    TotalMoney,
    Receipt,
  },
  data() {
    return {
      total: {},
      money: 0,
      selectedItem: null,
      spendWithoutThisItem: 0,
      items: [],
      me: {},
    };
  },

  created() {
    ApiCall(LIST_DATA).then((data) => (this.items = data.rows));
    ApiCall(USER_ME).then((data) => {
      this.me = data.rows[0];
      this.money = Number(data.rows[0].total);
    });
  },

  computed: {
    spend() {
      return this.items.reduce((a, b) => a + b.amount * b.price, 0);
    },

    totalSpend() {
      return this.spend ? this.money - this.spend : this.money;
    },

    itemsAdded() {
      return this.items.filter((item) => item.amount > 0);
    },

    totalLength() {
      return this.itemsAdded.length;
    },
  },
};
</script>
