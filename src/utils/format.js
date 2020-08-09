// pseudo dados de professores (simulando banco de dados)
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

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number ((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
