import Vue from "vue";
import Vuex from "vuex";
import api from "./api";
import { Assignment } from "./Interfaces/Assignment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    assignments: [] as Assignment[],
    noDeadlineAssignments: [] as Assignment[],
    currentDate: new Date(),
    page: 0,
    assignmentsPerPage: 3,
  },
  mutations: {
    async loadAssignments(state, { date, page }) {
      state.page = page;
      state.currentDate = date;
      state.assignments = (
        await api.getAssignmentsByDate(
          date,
          page * state.assignmentsPerPage,
          state.assignmentsPerPage
        )
      ).data;
      state.noDeadlineAssignments = (await api.getNoDateAssignments()).data;
      state.assignments.push(...state.noDeadlineAssignments);
    },
    setNoDeadlineAssignments(state, assignments: Assignment[]) {
      state.noDeadlineAssignments = assignments;
    },
    setAssignmentsPerPage(state, assignmentsPerPage: number) {
      state.assignmentsPerPage = assignmentsPerPage;
    },
    setAssignments(state, assignments: Assignment[]) {
      state.assignments = assignments;
      state.assignments.push(...state.noDeadlineAssignments);
    },
    addAssignment(state, assignment: Assignment) {
      state.assignments.push(assignment);
    },
    markDone({ assignments }: { assignments: Assignment[] }, index: number) {
      assignments[index].isDone = !assignments[index].isDone;
    },
    setDeadline(state, { index, deadline }: { index: number; deadline: Date }) {
      state.assignments[index].deadline = deadline;
    },
    markImportantAssignment(
      { assignments }: { assignments: Assignment[] },
      assignmentIndex: number
    ) {
      assignments[assignmentIndex].isImportant = !assignments[assignmentIndex]
        .isImportant;
      assignments.sort((a: Assignment, b: Assignment) =>
        a.isImportant === b.isImportant ? 0 : a.isImportant ? -1 : 1
      );
    },
  },
});