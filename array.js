

//Adiciona item no final

let frutas = ["Maçã", "Uva", "Laranja"];

frutas.push("Abacate");
console.log(frutas);

//Remove o último item
frutas.pop();
console.log(frutas);

//Tamanho do array
let numeros = [10,20,30,40];
console.log(numeroa.length); //4

//Filtra com base em condição
let nomes = ["Ana", "Beatriz", "João", "Carlos"];
let nomeFiltrado= nomes.filter( nome => nome == "João");
console.log(nomeFiltrado);

let cores = ["azul", "vermelho", "verde"]
    cores.ForEach(cor => {
        console.log("cor:", cor);
    });

    //Saída
    //Cor: azul
    //Cor: vermelho
    //Cor: verde