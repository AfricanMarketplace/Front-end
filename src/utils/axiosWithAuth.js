import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        //  baseUrl: "https://africa-marketplace.herokuapp.com",
        headers: {
            authorization: token
        }
    })
}