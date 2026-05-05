
const form = document.querySelector('form.form')
const newTaskList = document.querySelector('.new.task-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const task = document.createElement('li')
    task.textContent = form.task.value
    task.classList.add('task')

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.addEventListener('change' , handleCheck)

    const excludeButton = document.createElement('button')
    excludeButton.addEventListener('click', handleExclude)
    excludeButton.classList.add('exclude')

    const excludeIcon = document.createElement('img')
    excludeIcon.src = "./remove.svg"
    excludeButton.appendChild(excludeIcon);

    //criar container dos botoes
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttons')
    buttonContainer.appendChild(checkBox)
    buttonContainer.appendChild(excludeButton)

    //add buttn a task

    task.appendChild(buttonContainer)
    newTaskList.appendChild(task)


    newTaskList.appendChild(task)
})

const completedTaskList = document.querySelector(
    '.completed.task-list')

function handleCheck(event) {
    const check = event.target
    const task = check.parentElement.parentElement

    if(check.checked){
        task.classList.add('completed')
        newTaskList.removeChild(task)
        completedTaskList.appendChild(task)

    }else{
        task.classList.remove('completed')
        newTaskList.appendChild(task)
        completedTaskList.removeChild(task)
    }
}

function handleExclude(event){
    const button = event.target
    const task = button.parentElement.parentElement.parentElement
    const taskList = task.parentElement
    taskList.removeChild(task)
}