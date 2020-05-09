
let binar = "101";

function bin2dec(binary){
  result = 0;
  
  for (let i =0; i <binary.length; i++){
    let digit = binary.charAt(binary.length -i - 1);
    result += Number(digit) * Math.pow(2,i);
  }
  console.log(result)
}
 console.log(bin2dec(binar));