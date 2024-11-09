const MAX_LENGTH_TASK = 200

export const isValidTask = (taskList: string[], newTask: string) => {
    let isValid = true
    if(newTask === "") {
        isValid = false
    }

    if (taskList.includes(newTask)) {
        isValid = false
    }

    if (newTask.length > MAX_LENGTH_TASK) {
        isValid = false
    }

    return isValid
}