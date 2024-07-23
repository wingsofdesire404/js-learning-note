class calculator {
    constructor(previous, current) {
        // construct a class
        this.previous = previous
        this.current = current
        this.clear()
    }

    clear() {
        // all set to 0
        this.previous = ''
        this.current = ''
        this.operation = undefined
    }

    delete() {
        // cut a digit
        this.current = this.current.toString().slice(0, -1)
    }

    append(number) {
        // add a number digit to the end of the current screen
        if (number === '.' && this.current === '.') return // if both are . then don't do anything
        this.current = this.current.toString() + number.toString() // if not then add them up
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return; // check if current operand is empty
        if (this.previousOperand !== '') {
            // if both not empty
            this.compute(); // compute the result if there's a previous operand
        }
        this.operation = operation; // set the chosen operation
        this.previousOperand = this.currentOperand; // move current operand to previous operand
        this.currentOperand = ''; // clear the current operand for new input
      }
      

    comput() {
        let res // store computation result
        const prev = this.previous // get value
        const cur = this.current // get value
        if (isNaN(prev) || isNaN(cur)) return // if both empty then return
        switch (this.operation) {
            case ('+'):
                res = prev + cur
            case ('-'):
                res = prev - cur
            case ('*'):
                res = prev * cur
            case ('÷'):
                res = prev / cur
        }
        this.current = res
        this.operation = undefined
        this.prev = ''
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
        this.current.innerText = this.getDisplayNumber(this.cur) // use function inside the class to display the current number
        if (this.operation != null) {
          this.previous.innerText = `${this.getDisplayNumber(this.prev)} ${this.operation}`
        } else {
          this.previous.innerText = ''
        }
    }
}

// get all values by querySelector
const previous_operant = document.querySelector('[data-previous-operant]')
const current_operant = document.querySelector('[data-current-operant]')
const numbers = document.querySelector('[data-number]')
const equals = document.querySelector('[data-equal]')
const dels = document.querySelector('[data-delete]')
const clears = document.querySelector('[data-all-clear]')
const operations = document.querySelectorAll('[data-operation]')

const calculator = new calculator(previous_operant, current_operant)

// add event listener to each buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        calculator.append(number.innerText)
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
        calculator.comput()
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