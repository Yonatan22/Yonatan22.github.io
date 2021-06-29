<template>
  <div class="row my-2 justify-content-center">
    <div class="col-4">
      <i
        class="mx-2 fas fa-thumbtack"
        :style="[assignment.isImportant && thumbtackStyle]"
        @click="markImportantAssignment(index)"
      ></i>
      <input
        type="checkbox"
        :checked="assignment.isDone"
        class="form-check-input"
        @click="changeDoneStatus(index)"
      />
      <span
        style="display: inline; width: fit-content"
        :style="{
          'text-decoration': assignment.isDone ? 'line-through' : null,
        }"
        class="mx-2"
        >{{ assignment.description }}</span
      >
    </div>
    <div class="col-4">
      <date-picker
        v-model="deadline"
        type="datetime"
        @input="
          setDeadline({
            index,
            deadline,
          })
        "
      />
    </div>
  </div>
</template>
<script lang='ts'>
import { mapMutations } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  name: "AssignmentRow",
  props: ["assignment", "index"],
  data() {
    return {
      thumbtackStyle: {
        transform: "rotate(-45deg)",
      },
    };
  },
  computed: {
    deadline(): Date {
      return this.assignment.deadline && new Date(this.assignment.deadline);
    },
  },
  methods: {
    ...mapMutations([
      "setDeadline",
      "changeDoneStatus",
      "markImportantAssignment",
    ]),
  },
};
</script>