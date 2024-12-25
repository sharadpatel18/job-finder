import Axios from 'axios';

const instance = Axios.create({
    baseURL:"http://localhost:8000/auth"
})

const SignupApi = async (data) => {
    console.log(data);
    
    try {
        const responce = await instance.post('/signup' , data)
        return responce;
    } catch (error) {
        console.log(error);
    }
} 

const LoginApi = async (data) => {
    try {
        console.log(data);
        const responce = await instance.post('/login' , data);
        return responce
    } catch (error) {
        console.log(error);
    }
}

export { SignupApi , LoginApi }