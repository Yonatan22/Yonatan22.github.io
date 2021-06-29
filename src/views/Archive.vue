<template>
  <div class="container">
    <ul class="object administrator-checkbox-list" v-if="assignments.length !== 0">
      <assignment-row
        v-for="(assignment, index) in assignments"
        :key="index"
        :assignment="assignment"
        :index="index"
      ></assignment-row>
      <button
        class="col btn btn-outline-primary"
        type="button"
        data-mdb-ripple-color="dark"
        @click="save()"
      >
        Save
      </button>
    </ul>
    <h2 v-else>Archive is empty</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CheckList from "../components/CheckList.vue";
import api from "../api";
import AssignmentRow from "../components/AssignmentRow.vue";
import { Assignment } from "@/models/Assignment";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  name: "Archive",
  components: {
    CheckList,
    AssignmentRow,
  },
  computed: {
    ...mapState(["assignments", "currentDate", "page"]),
  },
  methods: {
    ...mapMutations(["loadDoneAssignments"]),
    async save() {
      await Promise.all(
        this.assignments.map((assignment: Assignment) =>
          api.postAssignments(assignment)
        )
      );
      this.loadDoneAssignments();
    },
  },
  created() {
    this.loadDoneAssignments();
  },
});
</script>
