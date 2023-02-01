window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const todoList = document.getElementById("todo-list");
	const todoListInput = document.getElementById("todo-text-input");
	const dueDateInput = document.getElementById("dueDate");
	const prioInput = document.getElementById("priority");
	const sortBtn = document.getElementById("sortBtn");
	const deleteAll = document.getElementById("deleteAllBtn");

	// dueDateInput.valueAsDate = new Date();

	let todos = [];

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const value = todoListInput.value.trim();

		if (!value || !dueDateInput.value) {
			return alert("Task or due date cannot be empty");
		}
		todoListInput.value = " ";
		todoListInput.focus();

		let todo = {
			title: value,
			dueDate: dueDateInput.value,
			priority: prioInput.value,
		};

		todos.push(todo);

		createTodoList(todos);
	});

	function createTodoList(todos) {
		document.querySelectorAll(".todo-item").forEach((el) => el.remove());

		todos.forEach((element) => {
			const newItem = document.createElement("li");
			newItem.classList.add("todo-item");
			// create checkbox
			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "status";
			checkbox.value = "value";
			checkbox.class = "todo-item__checked";
			checkbox.classList.add("todo-item__checkbox");
			newItem.appendChild(checkbox);

			checkbox.addEventListener("change", (e) => {
				newItem.classList.toggle("todo-item--checked");
			});
			// create the task text
			const text = document.createElement("p");
			text.classList.add("todo-item__title");
			newItem.appendChild(text);
			// create the due date field
			const dueDateText = document.createElement("div");
			dueDateText.innerText = element.dueDate;
			dueDateText.classList.add("todo-item__due");
			newItem.appendChild(dueDateText);
			// create the priority field
			const prioText = document.createElement("div");
			prioText.classList.add("todo-item__priority");
			// assigning the classes to priorities
			let className;
			switch (element.priority) {
				case "1":
					prioText.innerText = "High";
					className = "todo-item--high";
					break;
				case "2":
					prioText.innerText = "Medium";
					className = "todo-item--medium";
					break;
				case "3":
					prioText.innerText = "Low";
					className = "todo-item--low";
					break;
			}
			newItem.classList.add(className);
			newItem.appendChild(prioText);

			// create delete button per each task
			const deleteBtn = document.createElement("button");
			deleteBtn.innerText = "delete";
			deleteBtn.classList.add("delete-btn");

			deleteBtn.addEventListener("click", () => {
				newItem.remove();
				todos.splice(todos.indexOf(element),1);
			});

			newItem.appendChild(deleteBtn);
			todoList.appendChild(newItem);
			text.innerText = element.title;
		});
	}
	// sorting by priority
	function sortByPriority(todos) {
		let done = false;
		while (!done) {
			done = true;
			for (let i = 1; i < todos.length; i++) {
				if (todos[i - 1].priority > todos[i].priority) {
					done = false;
					let temp = todos[i - 1];
					todos[i - 1] = todos[i];
					todos[i] = temp;
				}
			}
		}
	}

	sortBtn.addEventListener("click", (e) => {
		sortByPriority(todos);
		createTodoList(todos);
	});

	//delete all tasks
	deleteAll.addEventListener("click", (e) => {
		todos = [];
		createTodoList(todos);
	});
});
