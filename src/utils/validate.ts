import { data } from "autoprefixer";
import { User } from "../types/User";


type Error = {
    [key: string]: string;


}

export const validate = (data: User) => {
    const errors: Error = {}

    if(!data.name) {
        errors['name'] = "O nome é obrigatório"
    }
    if(!data.email) {
        errors['email'] = "O e-mail é obrigatório"
    }

    if(!data.agree) {
        errors['agree'] = "Você precisa concorda com os termos"
    }


    return errors

}