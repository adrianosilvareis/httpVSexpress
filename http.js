const http = require('http')
const port = 3000

const handler = (req, res, next) => {
    console.log(req.url)
    
    const respostas = []
    respostas['/'] = '<h1>Home</h1>'
    respostas['/contato'] = '<h1>Contato</h1>'
    respostas['/contatos'] = '<h1>Contatos</h1>'
    respostas['/naoExiste'] = 'URL sem resposta definida'

    res.end(respostas[req.url] || respostas['/naoExiste'])
}

const server = http.createServer(handler)
server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})

