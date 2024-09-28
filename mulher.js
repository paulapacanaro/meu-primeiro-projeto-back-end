const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: "Paula Pacanaro",
    imagem: "https://media.licdn.com/dms/image/v2/D4D03AQEp66OrcbfSAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712340291869?e=1732147200&v=beta&t=jvZcFoQ9SMM7jPJvi9ohkSryk8oc_zyGTbGqhJn_ePI",
    minibio: "Consultora de recursos humanos"
    
   
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)