// Escrevendo as funçãos
function dancar(){
    alert("Você ganhou uma dancinha virtual💃🕺🕺🕺🕺")   
}

// Função chamarHeroi
function chamarHeroi(nomeHeroi){
    alert(nomeHeroi.toUpperCase()+ "!!!! ")
}
// Criar apelido
function criarapelido(nome, animal){
   alert("Seu apelido é "+ nome + " " + animal + " 🦊")  
}
// Daqui pra baixo utilizamos o prompt na função e não no botão no html
// Função de moedas
function moedasTotais( p, g){
     let p = prompt("Quantas moedas pequenas vocÊ tem, meu jovem? ")
     
     let g = prompt("Quantas moedas grandes vocÊ tem, meu jovem? ")
     let total = moedasTotais(p, g)
     alert(" Você fez" + total + "pontos em moedas !")   
}    

// Mostrar codinome
function mostrarCodinome(){
     let objeto = prompt("Digite um objeto ai: ")
     let numero = prompt(" Digite um número ai: ")
     alert("Seu codinome é : "+objeto+numero + "😎" )
} 
// Chocolate arrow function
const calcularChocolate = (dinheiro) => {
    return (dinheiro / 2.5)
}
function mostrarChocolate(){
     let grana = prompt("Quantos reais você tem? ")
    alert("Você pode comprar " + calcularChocolate(Number(grana)) + " chocolate ")    
}
    