import axios from "axios";
import authUser from "../models /authUser.ts";


export async function registerNewUser(user: authUser) {
    try {
        const data = await axios.post(
            'http://localhost:5027/auth/registration',
            user,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

