const form = document.querySelector('form.form')
const newTaskList = document.querySelector('new.task-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const task = document.createEvent('li')
    task.textContent = form.task.value
    task.classList.add('task')

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.addEventListener('change' , handCheck)

    constecludeButton = document.createElement('button')
    excludeButton.addEventListener('click', handleExclude)
    excludeButton.classList.add('exclude')

    newTaskList.appendChild(task)
})