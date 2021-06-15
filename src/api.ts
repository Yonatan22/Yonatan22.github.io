import axios from "axios";

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
        }
      }
    );
  },
  postAssignments(assignments: any) {
    return axios.put(
      `http://${process.env.VUE_APP_SERVER}/api/assignments`,
      assignments
    );
  },
};