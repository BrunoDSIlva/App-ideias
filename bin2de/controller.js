function convert () {
    let binar = window.document.getElementById('binary').value;

    if (binar.length >= 9 ) {
        alert("You just can enter up 8 binary digits check you input field")
        return;
    }else if(binar.match(/^[0-1]/g) === null) {
        alert("User can enter only 0 to 1")
        return;
    }   else {
        
                let result = 0;
                            for(let i = 0; i < binar.length; i++) {
                                    let digit = binar.charAt(binar.length -i -1)
                                    return document.getElementById('result') = result += Number(digit) * Math.pow(2,i)
                                    
                                }
                                    
                                
            }
                                
    
    
    
}