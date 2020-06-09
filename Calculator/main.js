    class Calculator {
        constructor(previousdisplayText, currentDisplayText){
            this.previousdisplayText = previousdisplayText;
            this.currentDisplayText = currentDisplayText;
            this.clear();
        }
        clear(){ // it is going clear all the operation
            this.currentOperand = '' ;
            this.previousOperand = '';
            this.operation = undefined;


        }
        delete(){ // it is going clear the last number

            this.currentOperand = this.currentOperand.toString().slice(0, -1)

        }
        
        hitNumber(number){ // it show the display before add any mumber

            if(number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString()

        }
        chooseOperation(operation){ // it chooses the operation of the calc
            if(this.currentOperand === '') return
            if(this.previousOperand !== ''){
                this.computer()
            }
            this.operation = operation;
            this.previousOperand = this.currentOperand
            this.currentOperand = ''

        }
        
        computer(){ // it make the single number choosed became the number of calc 

            let computation 
            const prev = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)

            if(isNaN(prev) || isNaN(current))return
            switch(this.operation){
                case '+':
                    computation =prev + current
                    break
                case '-':
                    computation =prev - current
                    break
                case 'x':
                    computation =prev * current
                    break
                case '/':
                    computation =prev / current
                    break
                default:
                    return
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = ''

        }
        getDisplayNumber(number){
            const stringNumber = number.toString()
            const integeDigit = parseFloat(stringNumber.split('.') [0])
            const decimalDigit = stringNumber.split('.')[1]
            let integerDisplay

            if (isNaN(integeDigit)){
                integerDisplay = ''
            }else {
                integerDisplay = integeDigit.toLocaleString('en', {
                    maximumFractionDigits:0 })

            }
            if (decimalDigit != null){
                return `${integerDisplay}.${decimalDigit}`
            }else{
                return integerDisplay
            }

            
        }
        updateDisplay(){ // this operation make the update of display when it is choosen the number or operation 
            this.currentDisplayText.innerText = this.getDisplayNumber(this.currentOperand)

            if (this.operation != null ){

                this.previousdisplayText.innerText =
               `${this.getDisplayNumber( this.previousOperand)
               }${this.operation}`

            }
            


        }
    }


        const numberButton = document.querySelectorAll('[data-number]');
        const operationButton = document.querySelectorAll('[data-operation]');
        const equalsButton = document.querySelector('[data-equals]');
        const deleteButton = document.querySelector('[data-delete]');
        const allClearButton = document.querySelector('[data-all-clear]');
        const previousdisplayText = document.querySelector('[data-previous-operation]');
        const currentDisplayText = document.querySelector('[data-current-operation]');

        const calculator = new Calculator(previousdisplayText, currentDisplayText)
        numberButton.forEach(button=> {
            button.addEventListener('click', ()=>{
                calculator.hitNumber(button.innerText)
                calculator.updateDisplay()
            })
        })
        operationButton.forEach(button=> {
            button.addEventListener('click', ()=>{
                calculator.chooseOperation(button.innerText)
                calculator.updateDisplay()
            })
        })

        equalsButton.addEventListener('click', button =>{
            calculator.computer()
            calculator.updateDisplay()
        })

        allClearButton.addEventListener('click', button =>{
            calculator.clear()
            calculator.updateDisplay()
        })
        deleteButton.addEventListener('click', button =>{
            calculator.delete()
            calculator.updateDisplay()
        })

