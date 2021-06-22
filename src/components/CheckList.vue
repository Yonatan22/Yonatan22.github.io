<template>
  <div class="row justify-content-center">
    <pagination class="" style="display: flex"></pagination>
    <div class="row">
      <input
        class="col"
        type="range"
        min="1"
        max="10"
        step="1"
        v-model="pageSize"
      />
      <input class="col-2" type="number" min="1" max="10" v-model="pageSize" />
    </div>
    <ul class="object administrator-checkbox-list">
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
  </div>
</template>

<script lang='ts'>
import { mapState, mapMutations } from "vuex";
import api from "../api";
import AssignmentRow from "./AssignmentRow.vue";
import Pagination from "./pagination.vue";
import { Assignment } from "../models/Assignment";
import InputBox from "./InputBox.vue";

export default {
  name: "CheckList",
  components: {
    AssignmentRow,
    Pagination,
    InputBox,
  },
  data() {
    return {
      message: null,
    };
  },
  methods: {
    ...mapMutations([
      "setAssignmentsPerPage",
      "markImportantAssignment",
      "markDone",
      "setDeadline",
      "setNoDeadlineAssignments",
    ]),
    isDue(date: Date): boolean {
      return (
        date &&
        date.getHours() === new Date().getHours() &&
        date.getMinutes() === new Date().getMinutes()
      );
    },
    notify(this: any) {
      this.assignments.forEach((assignment: Assignment) => {
        if (assignment.deadline && this.isDue(new Date(assignment.deadline))) {
          this.$alertify.message(`${assignment.description}`);
        }
      });
    },
    async save() {
      this.assignments.forEach(async (assignment: Assignment) => {
        await api.postAssignments(assignment);
      });
    },
  },
  computed: {
    ...mapState(["currentDate", "assignments", "assignmentsPerPage"]),
    pageSize: {
      get(): number {
        return this.assignmentsPerPage;
      },
      set(value: number) {
        this.setAssignmentsPerPage(Number(value));
      },
    },
  },
  async created() {
    const millisecondsInMinute = 60000;
    const millisecondsInSecond = 1000;
    setTimeout(() => {
      this.notify();
      setInterval(this.notify, millisecondsInMinute);
    }, (60 - new Date().getSeconds()) * millisecondsInSecond);
    this.setNoDeadlineAssignments((await api.getNoDateAssignments()).data);
  },
};
</script>