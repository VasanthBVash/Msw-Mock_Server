import { useQuery, useMutation } from "react-query";
import axios from "axios";

export interface IProps {
    id: string,
    userName: string,
    email: string,
    phoneNumber: number,
    password: string,
}

const key = "User";
const endpoint = "/api/Users";

export const useHookForm = ({id} : {id:string | undefined}) => {

    const user = useQuery<IProps, Error>([key,id], async () => {
        const { data } = await axios.get<IProps>(`${endpoint}/${id}`);
        return data;
    });

    const add = useMutation<IProps, Error, IProps, any>(async (newuser: IProps) => {
        const { data } = await axios.post(endpoint, newuser);
        return data;
    });

    const update = useMutation<IProps, Error, IProps, any>(async (update: IProps) => {
        const { data } = await axios.put(endpoint, update);
        return data;
    });

    const remove = useMutation<string, Error, string, any>(async (id: string) => {
        const { data } = await axios.delete(`${endpoint}/${id}`);
        return data;
    });

    return { user, add, update, remove };

}

