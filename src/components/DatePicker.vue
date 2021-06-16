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
import { Assignment } from '../Interfaces/Assignment'
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["page", "currentDate"]),
  },
  methods: {
    ...mapMutations(["loadAssignments"]),
  },
};
</script>