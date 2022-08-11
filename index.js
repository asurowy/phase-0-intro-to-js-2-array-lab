const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(nameAtEnd){
cats.push('Ralph');}
console.log(cats);
// expected output: Array ["Milo", "Otis", "Garfield", "Ralph"]

function destructivelyPrependCat(nameAtBeginning){
    cats.unshift('Bob');}
console.log(cats);
//expected output: Array ["Bob", "Milo", "Otis", "Garfield"]

function destructivelyRemoveLastCat(){
    cats.pop();}
    console.log(cats);
    //expected output: Array ["Milo", "Otis"]

    function destructivelyRemoveFirstCat(){
    cats.shift();}
console.log(cats);
//expected output: Array ["Otis", Milo"]

function appendCat(name){
    let copyOfCatNames= [...cats, "Broom"];
    return copyOfCatNames;
}

function prependCat(name){
    let nextName=["Arnold", ...cats];
    return nextName;
}

function removeLastCat(){
    let NewOrder = cats.slice(0,cats.length - 1);
    return NewOrder;
  }

function removeFirstCat(){
    let AnotherNewOrder = cats.slice(1)
    return AnotherNewOrder;
}
