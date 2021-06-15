<template>
  <div class="row mt-2">
    <div class="col-4">
      <input
        type="date"
        class="form-control"
        @input="loadAssignments({date: new Date($event.target.value), page})"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { mapState, mapMutations } from "vuex";
import { Assignment } from '../Interfaces/Assignment'

export default {
  computed: {
    ...mapState(["currentDate", "page"]),
  },
  methods: {
    ...mapMutations(["loadAssignments"]),
  },
};
</script>