class Calculator {
    constructor(previous, current) {
        // construct a class
        this.previous = previous
        this.current = current
        this.clear()
    }

    clear() {
        // all set to 0
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete() {
        // cut a digit
        this.currentOperand= this.currentOperand.toString().slice(0, -1)
    }

    append(number) {
        // add a number digit to the end of the currentOperand screen
        if (number === '.' && this.currentOperand.includes('.')) return // if both are . then don't do anything
        this.currentOperand = this.currentOperand.toString() + number.toString() // if not then add them up
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return; // check if currentOperand operand is empty
        if (this.previousOperand !== '') {
            // if both not empty
            this.compute(); // compute the result if there's a previousOperand operand
        }
        this.operation = operation; // set the chosen operation
        this.previousOperand = this.currentOperand; // move currentOperand operand to previousOperand operand
        this.currentOperand = ''; // clear the currentOperand operand for new input
      }
      

    compute() {
        let res // store computation result
        const prev = parseFloat(this.previousOperand) // get value
        const cur = parseFloat(this.currentOperand) // get value
        if (isNaN(prev) || isNaN(cur)) return // if both empty then return
        switch (this.operation) {
            case ('+'):
                res = prev + cur
                break
            case ('-'):
                res = prev - cur
                break
            case ('*'):
                res = prev * cur
                break
            case ('÷'):
                res = prev / cur
                break
            default:
                return
        }
        this.currentOperand = res
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        // display the number
        const stringNumber = number.toString() // transfer to string
        const integerDigits = parseFloat(stringNumber.split('.')[0]) // get the number before '.'
        const decimalDigits = stringNumber.split('.')[1] // get the number after '.'
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }

    updateDisplay() {
        this.current.innerText = this.getDisplayNumber(this.currentOperand) // use function inside the class to display the currentOperand number
        if (this.operation != null) {
            this.previous.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
          this.previous.innerText = ''
        }
    }
}

// get all values by querySelector
const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')

const previous = document.querySelector('[data-previous-operand]')
const current = document.querySelector('[data-current-operand]')
const equals = document.querySelector('[data-equals]')
const dels = document.querySelector('[data-delete]')
const clears = document.querySelector('[data-all-clear]')


const calculator = new Calculator(previous, current)

// add event listener to each buttons
numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.updateDisplay()
    })
});

dels.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

equals.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})


clears.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})


operations.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.innerText)
        calculator.updateDisplay()
    })
})