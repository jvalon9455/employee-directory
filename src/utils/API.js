import axios from "axios";

// export method to get employees from API
export default {
    getEmployees() {
        return axios.get("https://randomuser.me/api/?results=20&nat=us");
    }
};