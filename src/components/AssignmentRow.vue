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
        @click="markDone(index)"
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
      <input
        class="form-control"
        type="datetime-local"
        :value="
          assignment.deadline ? getTime(new Date(assignment.deadline)) : ''
        "
        @input="
          setDeadline({
            index,
            deadline: new Date($event.target.value),
          })
        "
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { mapMutations } from "vuex";

const dateFormat = 'en-GB';

export default {
  name: "AssignmentRow",
  props: ["assignment", "index"],
  data() {
    return {
      thumbtackStyle: {
        transform: "rotate(-45deg)",
      },
    };
  },
  methods: {
    ...mapMutations(["setDeadline", "markDone", "markImportantAssignment"]),
    getTime(date: Date) {
      return `${date.toISOString().split("T")[0]}T${date
        .toLocaleTimeString(dateFormat)
        .slice(0, 5)}`;
    },
  },
};
</script>