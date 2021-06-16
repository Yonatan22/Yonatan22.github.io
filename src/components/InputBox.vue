<template>
  <div class="input-group my-3">
    <input type="text" class="form-control" v-model="description" />
    <button
      class="btn btn-outline-primary"
      type="button"
      data-mdb-ripple-color="dark"
      @click="addAssignment(createAssignment())"
    >
      add assignment
    </button>
  </div>
</template>

<script lang='ts'>
import { Assignment } from '../Interfaces/Assignment';
import { mapMutations } from "vuex";

export default {
  name: "InputBox",
  data() {
    return {
      description: null,
    };
  },
  methods: {
    ...mapMutations(["addAssignment"]),
    createAssignment(): Assignment {
      return {
        description: this.description,
        isImportant: false,
        deadline: null,
        isDone: false,
      };
    },
  },
};
</script>