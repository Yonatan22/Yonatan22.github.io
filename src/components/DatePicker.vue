<template>
  <div class="row mt-2">
    <div class="col-4">
      <date-picker
        v-model="deadline"
        type="date"
        @input="deadline && loadAssignments({ date: deadline, page })"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { mapState, mapMutations } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      deadline: null,
    };
  },
  computed: {
    ...mapState(["page", "currentDate"]),
  },
  methods: {
    ...mapMutations(["loadAssignments"]),
  },
};
</script>