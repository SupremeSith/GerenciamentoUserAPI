import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())



// post salva os usuarios
app.post('/usuarios',async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })


// o body é o que vem no corpo da requisição, ou seja, o que o cliente envia para o servidor
// o push adiciona o usuario no array de usuarios
// o status 201 indica que o recurso foi criado com sucesso
    res.status(201).json(req.body)
})


// get retorna os usuarios
// o get é usado para obter informações do servidor
// o status 200 indica que a requisição foi bem sucedida
app.get('/usuarios',async (req, res) => {

    const users = await prisma.user.findMany()


    res.status(200).json(users)
})

app.listen(3000)



//usuario rodolfo
// senha S4A3jnQTxpPYeedZ