import express from "express";
import "./database"; // index.ts

const app = express();

/* 

Methods - HTTP

-> GET = Search
-> POST = Create
-> PUT = Alter
-> DELETE = Delete
-> PATCH = Alter an specific information.

*/

app.get("/", (request, response) => {
    return response.json({
        message: "Olá, NLW 05."
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    })
})

app.listen(3333, () => console.log('Server is running on port 3333.'));