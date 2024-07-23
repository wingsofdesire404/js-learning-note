class Calculator {
    constructor(previous, current) {
        // construct a class
        this.previous = previous
        this.current = current
        this.clear()
    }

    clear() {
        // all set to 0
        this.previousOperant = ''
        this.currentOperant = ''
        this.operation = undefined
    }

    delete() {
        // cut a digit
        this.currentOperant= this.currentOperant.toString().slice(0, -1)
    }

    append(number) {
        // add a number digit to the end of the currentOperant screen
        if (number === '.' && this.currentOperant.includes('.')) return // if both are . then don't do anything
        this.currentOperant = this.currentOperant.toString() + number.toString() // if not then add them up
    }

    chooseOperation(operation) {
        if (this.currentOperant === '') return; // check if currentOperant operand is empty
        if (this.previousOperant !== '') {
            // if both not empty
            this.compute(); // compute the result if there's a previousOperant operand
        }
        this.operation = operation; // set the chosen operation
        this.previousOperant = this.currentOperant; // move currentOperant operand to previousOperant operand
        this.currentOperant = ''; // clear the currentOperant operand for new input
      }
      

    compute() {
        let res // store computation result
        const prev = parseFloat(this.previousOperant) // get value
        const cur = parseFloat(this.currentOperant) // get value
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
        this.currentOperant = res
        this.operation = undefined
        this.previousOperant = ''
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
        this.current.innerText = this.getDisplayNumber(this.currentOperant) // use function inside the class to display the currentOperant number
        if (this.operation != null) {
            this.previous.innerText = `${this.getDisplayNumber(this.previousOperant)} ${this.operation}`
        } else {
          this.previous.innerText = ''
        }
    }
}

// get all values by querySelector
const previous = document.querySelector('[data-previous-operant]')
const current = document.querySelector('[data-current-operant]')
const numbers = document.querySelectorAll('[data-number]')
const equals = document.querySelector('[data-equals]')
const dels = document.querySelector('[data-delete]')
const clears = document.querySelector('[data-all-clear]')
const operations = document.querySelectorAll('[data-operation]')

const calculator = new Calculator(previous, current)

// add event listener to each buttons
numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText)
        calculator.updateDisplay()
    })
});

dels.forEach(del => {
    del.addEventListener('click', () => {
        calculator.delete()
        calculator.updateDisplay()
    })
})

equals.forEach(equal => {
    equal.addEventListener('click', () => {
        calculator.compute()
        calculator.updateDisplay()
    })
})

clears.forEach(clear => {
    clear.addEventListener('click', () => {
        calculator.clear()
        calculator.updateDisplay()
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.innerText)
        calculator.updateDisplay()
    })
})