// procurar o botão 
document.querySelector("#add-time")
.addEventListener('click', cloneField) // adicionar um ouvidor de eventos
// quando clicar no botão

// executar uma ação
function cloneField(){
    // console.log("Cheguei aqui")

    // duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // #true pega os filhos contidos na div
    // no javascript usamos sempre node para se referir tags HTML

    // pegar os campos. Que campos? 
    const fields = newFieldContainer.querySelectorAll('input')
   
    // para cada campo limpar
    fields.forEach(function(i){
        // pegar o field do momento e limpa ele
        i.value = ""
    })

    // colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    