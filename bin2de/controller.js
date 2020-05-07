function convert () {
    let binar = window.document.getElementById('binary').value;

    if (bianr >= 9 ){
        alert("You just can enter up 8 binary digits check you input field")
        return;
    }else if(binar.match(/^[0-1]/g) === null){
        alert("User can enter only 0 to 1")
        return;
    }
}