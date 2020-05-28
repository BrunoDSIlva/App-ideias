    class Calculator {
        constructor(previousdisplay, currentDisplay){
            this.previousdisplay = previousdisplay;
            this.currentDisplay =currentDisplay;
        }
        clear(){ // it is going clear all the operation

        }
        delete(){ // it is going clear the last number

        }
        showDisplay(number){ // it show the display before add any mumber

        }
        chooseOeration(operation){ // it chooses the operation of the calc

        }
        
        computer(){ // it make the single number choosed became the number of calc 

        }
        updateDisplay(){ // this operation make the update of display when it is choosen the number or operation 

        }
    }


    const numberButton = document.querySelectorAll('[data-number]');
    const operationButton = document.querySelectorAll('[data-operation]');
    const equalsButton = document.querySelector('[data-equals]');
    const deleteButton = document.querySelector('[data-delete]');
    const allclearButton = document.querySelector('[data-all-clear]');
    const previousdisplay = document.querySelector('[data-previous-operation]');
    const currentDisplay = document.querySelector('[data-current-operation]');



