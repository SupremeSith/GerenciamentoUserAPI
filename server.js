import express from 'express';

const app = express()
app.use(express.json())

const users = []


// post salva os usuarios
app.post('/usuarios', (req, res) => {

    users.push(req.body)
// o body é o que vem no corpo da requisição, ou seja, o que o cliente envia para o servidor
// o push adiciona o usuario no array de usuarios
// o status 201 indica que o recurso foi criado com sucesso
    res.status(201).json(req.body)
})


// get retorna os usuarios
// o get é usado para obter informações do servidor
// o status 200 indica que a requisição foi bem sucedida
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)