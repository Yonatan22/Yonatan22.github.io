<template>
  <div class="container">
    <date-picker msg="Welcome to Your Vue.js + TypeScript App"/>
    <input-box/>
    <check-list/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DatePicker from '../components/DatePicker.vue';
import InputBox from '../components/InputBox.vue';
import CheckList from '../components/CheckList.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    DatePicker,
    InputBox,
    CheckList,
  },
});
</script>
