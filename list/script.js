class List {
    constructor() {
        this.items = []
    }
    add(text) {
        if (text) {
            this.items.push(text)
            this.display()
        }
    }
    clear() {
        this.items = []
        this.display()
    }
    delete(index) {
        this.items.splice(index, 1)
        this.display()
    }
    display() {
        const area = document.querySelector('[data-listArea]')
        area.innerHTML = ''
        this.items.forEach((item, index) => {
            const list = document.createElement('div')
            list.textContent = item
            const delBtn = document.createElement('button')
            area.appendChild(list)
        })
    }
}
const text = document.getElementById('text').value
const button = document.querySelector('[data-button]')

const taskList = new List()

button.addEventListener('click', ()=>{
    const task = document.getElementById('text').value
    taskList.add(task)
})