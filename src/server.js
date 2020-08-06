// pseudo dados de professores (simulando banco de dados)

const proffys = [ 
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(ddd) 90000-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    }, 
    {
        name: "Jonas Cesconetto", 
        avatar: "https://avatars3.githubusercontent.com/u/12466042?s=460&u=eef14742a3908bb41c0d6a068e3ae1e1cbfdb89a&v=4",
        whatsapp: "(047) 99932-7042",
        bio: "Entusiasta das melhores tecnologias ...",
        subject: "Matemática",
        cost: "20",
        weekday: [
            2
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1 // o sinal de + garante que é um número
    return subjects[position] 

}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    // se houver data adicionar
    const isNotEmpty = Object.keys(data).length > 0 // transforma os objetos em um array
    if (isNotEmpty){

        // enviar o nome da matéria ao invés do número
        data.subject = getSubject(data.subject)

        // adicionar data a lista de proffys
        proffys.push(data)   

        // adicionou e redirecionou para a pagina /study
        return res.redirect("/study")
    }
    // se não, mostra a página
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

// configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
// configurar arquivos estáticos (css, scripts, images)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses) 
// start do servidor
.listen(5500)