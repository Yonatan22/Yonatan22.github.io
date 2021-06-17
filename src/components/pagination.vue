<template>
    <ul class="pagination pg-blue">
      <li class="page-item" @click="start = Math.max(start - 1, 1)">
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
      <li class="page-item" @click="start++">
        <a class="page-link">Next</a>
      </li>
    </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      start: 1,
    };
  },
  computed: {
    ...mapState(["currentDate"]),
    pages() {
      return [...new Array(3)].map((x, i) => i + this.start);
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