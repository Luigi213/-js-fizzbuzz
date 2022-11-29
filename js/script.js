let content = document.querySelector(".col-content");
// 1- Creo un algoritmo di numeri che parti da 1 fino 100
// 1.1 - uso un for per creare algoritmo 
for(let i=1; i<=100; i++){
    // 2- Imposto delle regole:
    let element;
    // IF multipli di 3 stampi "Fizz"
    if(i % 3 == 0){
        element = '<div class="box box-green">Fizz</div>';
    }
    // ELSE IF multipli di 5 stampi “Buzz”
    else if(i % 5 == 0){
        element = '<div class="box box-yellow">Bazz</div>';
    }    
    // ELSE numero non multipli di 3 e 5
    else{
        element = `<div class="box box-blue">${i}</div>`;
    }
    //IF multipli di 3 che di 5 stampi “FizzBuzz”
    if( i % 3 == 0 && i % 5 == 0 ){
        element = '<div class="box box-red">FizzBazz</div>';
    }
}

