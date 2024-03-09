window.onload = function() {
    generateCalendar();
}

const generateCalendar = () => {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1 ,0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    /* renderizar los 7 dias de la semana */
    for (let i= 0; i < firstDayOfWeek; i++) {
        const blankDay = document.createElement('div');
        calendar.appendChild(blankDay);

    }
    /* renderizar los dias del mes */
    for (let day = 1; day <= totalDays; day++) {
        const daySquare = document.createElement('div');
        daySquare.className = 'calendar-day'
        daySquare.textContent = day;
        daySquare.id = `day-${day}`;
        calendar.appendChild(daySquare)
    }
}

/* abrir y cerrar add task */
const showAddTaskModal = () => {
    document.getElementById('add-task-modal').style.display = 'block'
}

const closeTaskModal = () => {
    document.getElementById('add-task-modal').style.display = 'none';
}

const deleteTask = (taskElement) => {
    if((confirm('Are you sure you want to delete this task?'))) {
        taskElement.parentNode.removeChild(taskElement);
    }
}

const editTask = (taskElement) => {
    const newTask = prompt('Edit your task:', taskElement.textContent);
    if(newTask !== null & newTask.trim !== "") {
        taskElement.textContent = newTask;
    }
}

const addTask = () => {
    /* obtenemos la fecha del input */
    const taskDate = new Date(document.getElementById('task-date').value)
    /* obtenemos la descripcion de la task del input */
    const desc = document.getElementById('task-desc').value.trim();

    /* si ambas condiciones son verdaderas: */
    if(desc && !isNaN(taskDate.getDate())) { /* Si no es un numero (fecha invalida) devuelve true y el operador ! lo invierte */

        /* obtenemos cada uno de los dias del calendario a traves del hijo del contenedor calendar */
        const calendarDays = document.getElementById('calendar').children;

        /*  buscamos el día seleccionado en el calendario */
        for(let i =0; i < calendarDays.length; i++) {
            const day = calendarDays[i];
           /* cuando el día de la variable i coincida con la fecha de taskDate */
            if(parseInt(day.textContent) === taskDate.getDate()) {
                const taskElement = document.createElement('div')
                taskElement.classList.add('task')
                taskElement.textContent = desc;
                taskElement.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    deleteTask(taskElement);
                })
                taskElement.addEventListener('click', function(e) {
                    e.preventDefault()
                    editTask(taskElement)
                })
                day.appendChild(taskElement);
                break;
            }
            closeTaskModal(); 
        }
    } else {
        alert('Please enter a valid date and description');
    }
}