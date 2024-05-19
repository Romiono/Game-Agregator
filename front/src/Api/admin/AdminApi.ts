import axios from "axios";

export class AdminApi {
    static fetchUsers =  async () => {
        try {
            const response = await axios.get('http://localhost:5027/api/admin/users');
            return response.data;
        } catch (e) {
            if(e instanceof Error) {
                console.log(e);
            }
        }
    };
    static ban = async (id: string) => {
        try {
            await axios.delete(`http://localhost:5027/api/admin/users/delete/${id}`);
        } catch (e) {
            if(e instanceof Error) {
                console.log(e);
            }
        }
    };
}

