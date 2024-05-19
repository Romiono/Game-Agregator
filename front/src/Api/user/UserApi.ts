import axios from "axios";

export class UserApi {
    static async changeName(id: string, newName: string) {
        try {
            await axios.patch(`http://localhost:5027/api/auth/user/username/${id}`, {
                username: newName,
            })
        } catch (e) {
            if (e instanceof Error) {
                console.log(e);
            }
        }
    }

    static async changePassword(id: string, newPassword: string) {
        try {
            await axios.patch(`http://localhost:5027/api/auth/user/password/${id}`, {
                password: newPassword,
            })
        } catch (e) {
            if (e instanceof Error) {
                console.log(e);
            }
        }
    }
}