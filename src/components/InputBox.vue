<template>
  <div class="input-group my-3">
    <input type="text" class="form-control" v-model="description" />
    <button
      class="btn btn-outline-primary"
      type="button"
      data-mdb-ripple-color="dark"
      @click="description && addAssignment(createAssignment())"
    >
      add assignment
    </button>
  </div>
</template>

<script lang='ts'>
import { mapMutations } from "vuex";
import { Assignment } from "../models/Assignment";

export default {
  name: "InputBox",
  data() {
    return {
      description: undefined,
    };
  },
  methods: {
    ...mapMutations(["addAssignment"]),
    createAssignment(): Assignment {
      return {
        description: this.description,
        isImportant: false,
        isDone: false,
        deadline: null,
      };
    },
  },
};
</script>