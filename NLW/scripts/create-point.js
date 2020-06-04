function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for ( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

function getCities(event){
    const citySelect=document.querySelector("select[name=city]")
    const stateInput=document.querySelector("input[name=state]")
        console.log(event.target.value)
        const ufvalue =event.target.value
        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value= event.target.options[indexOfSelectedState].text
        const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
        citySelect.innerHTML =""
        // Irá bloquear o campo antes de mostrar
        citySelect.disable = true
        fetch(url)
        .then( res => res.json() )
        .then( cities => {
        for ( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disable = false
        })
}

populateUFs()

document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

// Itens de Coleta
// Pegar todos os li´s
const itemsToCollect = document.querySelectorAll(".items-grid li")
// utilizar qualquer váriavel
for(let item of itemsToCollect){
    // o ouvidor de eventos estará esperando o click
    item.addEventListener("click", handleSelectedItem)
}
 const collectedItems = document.querySelector("input[name=items]")
// Add os itens selecionados ao input items que é hidden
let selectedItems= []
function handleSelectedItem(event){
    // add ou remover uma class co js
    const itemLi = event.target
    // Colocado o dataset.id para pegar apenas os números do li
    // console.log(event.target.dataset.id) podia ser escrito assim mas para facilitar é criado uma variável 
    // console.log(itemLi.dataset.id)
    //itemLi.classList.add("selected") ou itemLi.classList.remove("selected") para add ou remover, mas o toggle faz isso 
    itemLi.classList.toggle("selected")
    const itemId=itemLi.dataset.id
    // Verificicar se existe itens selecionados, se houver pega-los  
    // .findIndex é um func que irá receber outra func
    // function(item) por ser uma func anônima ela pode ser uma arrow func
    const alredySelected = selectedItems.findIndex(item =>{
        const itemFound= item==itemId //o return será true ou false
        return itemFound
    })
    // console.log(alredySelected != -1) para teste saber se é true ou false
    // se já estiver selecionado remover da seleção,
    if(alredySelected != -1){
    //tira da seleção
    // mesma coisa que o de baixo só que menos simplificado const filteredItems= selectedItems.filter(function(item)) 
    const filteredItems= selectedItems.filter(function(item){
        const itemIsDifferent = item != itemId //false
        return itemIsDifferent
    }) 
    selectedItems = filteredItems
    }
    // se não estiver selecionado, add a seleção
    else{
        selectedItems.push(itemId)
    }
    // console.log(selectedItems) teste para ver o que foi selecionado
    // atualizar o input hidden items
    collectedItems.value = selectedItems
}