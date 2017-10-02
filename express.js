const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


app.get('/', (req, res, next) => {
    res.send("<h1>Home</h1>")
})

app.get('/contato', (req, res, next) => {
    res.send(`
        <h1>Contato</h1>
        <form method='post'>
            <label>Nome</label>
            <input type='text' name='nome' id='nome'/>
            <label>Email</label>
            <input type='email' name='email' id='email' />
            <label>Mensagem</label>
            <textarea name='mensagem' id='mensagem'></textarea>
            <input type='submit' value='Enviar'>
        </form>
    `)
})

app.post('/contato', (req, res, next) => {
    res.json(req.body)
    
})

app.listen(port, () => {
    console.log("Servidor ouvindo na porta " + port)
})