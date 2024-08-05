import express from "express";
import cors from 'cors';
import conteudos from "./conteudos.js"; 

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.get("/", (requisicao, resposta) => {
    resposta.json({ mensagem: "Olá Mundo!" });
});

servidor.get("/api", (requisicao, resposta) => {
    resposta.status(200).json(conteudos);
});

servidor.get("*", (requisicao, resposta) => {
    resposta.sendStatus(404);
});

servidor.listen(4000, () => {
    console.log("SERVIDOR EM FUNCIONAMENTO!");
    console.log("http://localhost:4000/");
});
