function addNewTodo() {
    const todoHeading = document.getElementsByClassName('aside__texteditor-head')[0];
    const todoBody = document.getElementsByClassName('aside__texteditor-body')[0];

    const headingText = todoHeading.value.trim();
    const bodyText = todoBody.value.trim();

    // Cheking Blank Input
    if (headingText === "" || bodyText === "") {
        if (headingText === "" && bodyText === "") {
            return alert("Please write something to add todo");
        } else if (headingText === "") {
            return alert("Enter a title");
        } else if (bodyText === "") {
            return alert("Enter a description");
        }
    }

    // Creating element
    const newTodoItem = document.createElement('div');
    newTodoItem.classList.add('main__todo-item');
    newTodoItem.onclick = openTodo;

    // Todo Heading
    const newTodoHeading = document.createElement('h2');
    newTodoItem.appendChild(newTodoHeading);
    newTodoHeading.classList.add('main__heading-text');
    // Todo Heading Text
    const newTodoHeadingText = document.createElement('span');
    newTodoHeading.appendChild(newTodoHeadingText);
    newTodoHeadingText.classList.add('main__span-heading-text');

    // Todo Body
    const newTodoBody = document.createElement('p');
    newTodoItem.appendChild(newTodoBody);
    newTodoBody.classList.add('main__body-text');

    // Putting the value
    // Heading Text
    newTodoHeadingText.textContent = headingText;
    // Body Text
    newTodoBody.textContent = bodyText;

    // Appending the whole element created
    // Main Container
    const mainContainer = document.getElementsByTagName('main')[0];
    mainContainer.insertBefore(newTodoItem, mainContainer.children[1]);

    // Reset editor
    todoHeading.value = "";
    todoBody.value = "";
}

// Open Editor using create button
function openTextEditor() {
    // let createButton = document.getElementsByClassName('main__create-btn')[0];

    // Selecting aside element
    let aside = document.getElementsByClassName('aside')[0];

    // Selecting Body
    let body = document.getElementsByTagName('body')[0];

    // Logic
    if (aside.classList.contains('aside--appear')) {
        aside.classList.remove('aside--appear');
        body.style.gridTemplateAreas = '"header header" "main main"'
    } else {
        aside.classList.add('aside--appear');
        body.style.gridTemplateAreas = '"header header" "aside main"';
        document.querySelector('.aside__texteditor-head').focus();
    }

    // Reset
    document.querySelector('.aside__texteditor-head').value = "";
    document.querySelector('.aside__texteditor-body').value = "";
    console.log("is full bruh")
}

// Opening todo via Click
function openTodo() {
    if (!document.querySelector('aside').classList.contains('aside--appear')) {
        openTextEditor();
    }

    // Defining the element
    let heading = this.querySelector('.main__span-heading-text');
    let body = this.querySelector('.main__body-text');

    // console.log(heading)
    // console.log(body)
    let todoHeading = heading.textContent;
    let todoBody = body.textContent;
    // console.log(todoHeading)
    // console.log(todoBody);

    // Getting target elements
    document.getElementsByClassName('aside__texteditor-head')[0].value = todoHeading;
    document.getElementsByClassName('aside__texteditor-body')[0].value = todoBody;
}

// Event Listeners
// For opening text editor or create new todo
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        openTextEditor();
    }
})

// For saving todo using shortcut
document.querySelector('aside').addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        addNewTodo();
    }
})


// Custom conditional global styles
if (!document.querySelector('.aside').classList.contains('.aside--appear')) {
    document.querySelector('main').style.paddingLeft = '0.5rem';
}
