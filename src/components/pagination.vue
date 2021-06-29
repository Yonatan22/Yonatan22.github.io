<template>
  <ul class="pagination pg-blue" v-if="pageCount">
    <li class="page-item" @click="pageIndex--">
      <a class="page-link">Previous</a>
    </li>
    <li
      class="page-item"
      :class="[pageSlot === page && 'active']"
      v-for="pageSlot in pages"
      :key="pageSlot"
      @click="pageIndex = pageSlot"
    >
      <a class="page-link">{{ pageSlot + 1 }}</a>
    </li>
    <li class="page-item" @click="pageIndex++">
      <a class="page-link">Next</a>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentDate", "pageCount", "page"]),
    pages() {
      return [...new Array(this.pageCount).keys()];
    },
    pageIndex: {
      get() {
        return this.page;
      },
      set(page) {
        this.loadAssignments({
          date: this.currentDate,
          page: Math.min(this.pageCount - 1, Math.max(0, page)),
        });
      },
    },
  },
  methods: {
    ...mapMutations(["loadAssignments"]),
  },
};
</script>

<style scoped>
ul {
  width: auto !important;
}
</style>