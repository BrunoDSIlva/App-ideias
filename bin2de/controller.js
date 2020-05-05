function calc (){

    let binary = document.getElementsByClassName('b-num');
    let sum = 0;  

    for (let i =0; i< binary.length; i++){
        let algorism = binary.charAt(binary.length-i);
        sum += parseInt(algorism) * pow(2,i);

    }
    
    
    let decimal = document.getElementsByClassName('d-num').innerHTML = sum;
}
