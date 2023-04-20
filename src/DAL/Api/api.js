import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todos-1d2ab-default-rtdb.firebaseio.com/',
});


export const api = {
    async saveUser({email, tel, name}) {
        return await instance.post('users.json', {
            tel, email, name,
        })
    },
}