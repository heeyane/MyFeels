import axios from "axios";

export default {
    //existing user login

    login: (userData) =>
        axios.get("/auth/", {
            params: {
                email: userData.email,
                password: userData.password,
            },
        }),

    //new user signup
    signup: (userData) => axios.post("/auth/", userData),

    //get entries by criteria
    createEntry: (user, entryData) => axios.post("/entries", { user: user, entry: entryData }),

    getEntries: (id) => axios.get("/entries/" + id),
};