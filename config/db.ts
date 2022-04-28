import { Client } from "./deps.ts";
const cliente = new Client();


cliente.connect({
    hostname:"127.0.0.1",
    username:"root",
    password:"",
    db:"sixpack"
})

export default cliente;