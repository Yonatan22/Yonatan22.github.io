<template>
  <ul class="pagination pg-blue" v-if="pageCount">
    <li class="page-item" @click="startIndex--">
      <a class="page-link">Previous</a>
    </li>
    <li
      class="page-item"
      v-for="page in pages"
      :key="page"
      @click="loadAssignments({ date: currentDate, page: page - 1 })"
    >
      <a class="page-link">{{ page }}</a>
    </li>
    <li class="page-item" @click="startIndex++">
      <a class="page-link">Next</a>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

const navMaxLength = 3;

export default {
  data() {
    return {
      start: 1,
    };
  },
  computed: {
    ...mapState(["currentDate", "pageCount"]),
    pages() {
      return [...new Array(Math.min(this.pageCount, navMaxLength))].map((x, i) => i + this.start);
    },
    startIndex: {
      get() {
        return this.start;
      },
      set(value) {
        this.start = Math.min(
          Math.max(1, this.pageCount - navMaxLength + 1),
          Math.max(1, value)
        );
      },
    },
  },
  methods: {
    ...mapMutations(["setPage", "loadAssignments"]),
  },
};
</script>

<style scoped>
ul {
  width: auto !important;
}
</style>