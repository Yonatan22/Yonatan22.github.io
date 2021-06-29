import axios from "axios";
import { Assignment } from "./models/Assignment";

export default {
  getNoDateAssignments() {
    return axios.get(
      `http://${process.env.VUE_APP_SERVER}/api/assignments/date/`
    );
  },
  getAssignmentsByDate(date: Date, start: Number, count: Number) {
    return axios.get(
      `http://${
        process.env.VUE_APP_SERVER
      }/api/assignments/date/${date.getTime()}`,
      {
        params: {
          start,
          count,
        },
      }
    );
  },
  getDoneAssingments() {
    return axios.get(
      `http://${process.env.VUE_APP_SERVER}/api/assignments/done`
    );
  },
  postAssignments(assignment: Assignment) {
    return axios.put(
      `http://${process.env.VUE_APP_SERVER}/api/assignments`,
      assignment
    );
  },
  getPageCount() {
    return axios.get(
      `http://${process.env.VUE_APP_SERVER}/api/assignments/count`
    );
  },
};
