# App-ideias
 I haved accepted to participate of challenge that propose some app ideias that  have to create tha solution to impreve my knowledge about devoloment,  i really excited with , let code...

[] User can enter up to 8 binary digits in one input field
[] User must be notified if anything other than a 0 or 1 was entered
[] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

essa parte de baixo codigo, foi escrita depois de algumas lidas na documentation. não funcionou então, fiz uma busca por alguns foruns e encontrei um novo codigo que usei no codigo Controller.js achei mais limpo e não muito diferente do que já tinha criado. 
let bin = document.querySelector(".b-num").value;


let int = parseInt(bin,2);

function converte (){


    for (let i =0; i < bin.length(); i++) {
        let c = bin.charAt(i);
        let numdec;
            numdec =+ (c * (2**i));
  
    }

    
}