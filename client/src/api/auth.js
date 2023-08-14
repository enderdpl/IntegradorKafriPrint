//instalamos axios que es una depencia que engloba a fetch y se usa para las llamada ala api osea al backend 
import axios from "./axios"
export const registerRequest= user => axios.post(`/register`,user)
export const loginRequest= user => axios.post(`/login`,user)

export const verifyTokenRequest =()=>axios.get(`/verify`)
