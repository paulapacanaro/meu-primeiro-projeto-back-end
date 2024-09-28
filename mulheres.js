const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Paula Pacanaro",
        imagem: "https://media.licdn.com/dms/image/v2/D4D03AQEp66OrcbfSAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712340291869?e=1732147200&v=beta&t=jvZcFoQ9SMM7jPJvi9ohkSryk8oc_zyGTbGqhJn_ePI",
        minibio: "Consultora de Recursos Humanos. Aspirante de Tecnologia."
    },
    {
        nome: "Cristina Pacanaro",
        imagem: "https://media.licdn.com/dms/image/v2/C4E03AQEeHigP_E2gIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635449833994?e=1732147200&v=beta&t=6n4dWDGs48mLgWjEuMt4NkesE4KIqHpTuYfquvzIZ-E",
        minibio: "Gerente de Recursos Humanos. Aspirante de Tecnologia."
    },
    {
        nome: "Clara Barbosa",
        imagem: "https://media.licdn.com/dms/image/v2/D4D35AQFmNnqPZ3M1KQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726147801448?e=1727535600&v=beta&t=6YSpeWEnuZWmJRHuscjfXWRXOlaS4gcsWxri2E8rDXE",
        minibio: "Assistente de Recrutamento e Seleção. Aspirante de Tecnologia."
    }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)