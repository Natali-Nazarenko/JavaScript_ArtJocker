class Restaurant {
    constructor() {
        this.departments = departments;
        this.employees = employees;
    }

    getSumSalarysDepartments() {
        const sumAllSalarysDepartments = [];

        for (let item of this.departments) {
            let sumAndDepartmens = {};
            let sumSalarys = 0;

            for (let data of this.employees) {

                if (item.name === data.department) {
                    sumSalarys += data.salary;
                }
            }
            sumAndDepartmens = {
                [item.name]: sumSalarys,
            }
            sumAllSalarysDepartments.push(sumAndDepartmens);
        }

        return sumAllSalarysDepartments;
    }

    getMiddleSalaryDepartment(data) {
        let sumSalarys = 0;
        let count = 0;

        for (let item of this.employees) {

            if (item.department === data) {
                sumSalarys += item.salary;
                count++;
            }
        }

        return Math.floor(sumSalarys / count);
    }

    getMinimalSalaryDepartment(data) {
        const arraySalary = [];
        // debugger

        for (let item of this.employees) {
            if (item.department === data) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    }

    getTopSalaryDepartment(data) {
        let topSalary = 0;

        for (let item of this.employees) {

            if (item.department === data) {

                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }

        return topSalary;
    }

    getMinimalSalaryPost(post) {
        const arraySalary = [];

        for (let item of this.employees) {

            if (item.post.includes(post)) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    }

    getTopSalaryPost(post) {
        let topSalary = 0;

        for (let item of this.employees) {

            if (item.post.includes(post)) {

                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }

        return topSalary;
    }

    getAmountFiredEmployees(isFired) {
        let count = 0;
        for (let item of this.employees) {

            if (item.fired === isFired) {
                count++;
            }
        }

        return count;
    }

    getDepartmentWithoutHead() {
        // debugger
        const searchParametr = ' head';
        let departmentsWithoutHead = [];

        for (let item of this.employees) {

            if (item.post.includes(searchParametr)) {
                for (let data of this.departments) {

                    if (data.department === item.department) {
                        departmentsWithoutHead.push(data.name);
                    }
                }
            }
        }

        return departmentsWithoutHead;
    }

};

const restaurant = new Restaurant();

class Menu {
    constructor() {
        this.main = document.querySelector('.main');
        this.menu = document.querySelector('.menuBlock');
        this.departments = departments;
        this.employees = employees;
        this.createSelectMenu();
        this.selectAllEmployees();
        this.selectAllDepartment();
        this.createNewDepartment();
        this.createNewEmployee();
        this.setDepartmentToLocalStorage();
        this.setEmployeesToLocalStorage();
    }

    setDepartmentToLocalStorage(data) {
        data = data || this.departments;
        localStorage.departments = JSON.stringify(data);
    }

    setEmployeesToLocalStorage(data) {
        data = data || this.employees;
        localStorage.employees = JSON.stringify(data);
    }

    getDepartmentsFromLocalStorage() {
        const dataDepartments = localStorage.departments;
        return JSON.parse(dataDepartments || null);
    }

    getEmployeesFromLocalStorage() {
        const dataEmployees = localStorage.employees;
        return JSON.parse(dataEmployees || null);
    }

    selectAllEmployees() {
        const buttonRemoveChoice = document.createElement('DIV');

        const allEmployees = document.createElement('DIV');
        allEmployees.className = 'allEmployees';
        allEmployees.innerText = 'Show all employees';

        allEmployees.addEventListener('click', (event) => {
            event.preventDefault();

            allEmployees.appendChild(buttonRemoveChoice);

            const isActive = event.target.classList.toggle('active');

            //проверка на: выбран отдел или нет(и что делать)
            if (isActive) {
                buttonRemoveChoice.className = 'buttonRemoveChoice active';
                const blockWithAllEmployees = document.createElement('DIV');
                blockWithAllEmployees.className = 'blockEmployees';
                const arrayEmployees = this.getEmployeesFromLocalStorage();
                const employees = arrayEmployees.map(item => creating.createCard(item));
                blockWithAllEmployees.append(...employees);
                this.main.appendChild(blockWithAllEmployees);
            } else {
                this.main.querySelector('.blockEmployees').remove();
                buttonRemoveChoice.className = 'buttonRemoveChoice';
            }
        })
        this.menu.appendChild(allEmployees);
    }

    createNewDepartment() {
        const newDepartment = document.createElement('DIV');
        newDepartment.className = 'newDepartment';
        newDepartment.innerText = 'Create new Department';

        newDepartment.onclick = () => new ModalDepartment().createModal();

        this.menu.appendChild(newDepartment);
    }

    createNewEmployee() {
        const newEmployee = document.createElement('DIV');
        newEmployee.className = 'newEmployee';
        newEmployee.innerText = 'Create new Employee';

        newEmployee.onclick = () => new ModalEmployee().createModal();

        this.menu.appendChild(newEmployee);
    }

    createSelectMenu() {
        //создание пункта в бургер меню
        const titleListDepartmens = document.createElement('DIV');
        titleListDepartmens.className = 'departmens';
        titleListDepartmens.innerHTML = '<span>Departmens</span>';

        //создание галочки
        const dropdownMenuButton = document.createElement('DIV');
        dropdownMenuButton.className = 'dropdownMenuButton';
        titleListDepartmens.appendChild(dropdownMenuButton);

        //создание блока с департаментами
        const blockChoice = document.createElement('UL');
        blockChoice.className = 'blockChoice';

        //обработка клика - выбора департамента
        blockChoice.onclick = ({ target }) => {
            const blockSelectedDepartment = document.createElement('DIV');
            const removeButton = target.querySelector('.buttonRemoveChoice');
            const isActive = target.classList.toggle('active');

            //проверка на: выбран отдел или нет(и что делать)
            if (!isActive) {
                removeButton.className = 'buttonRemoveChoice';
                document.getElementById(target.innerText).remove();
            } else {
                removeButton.className = 'buttonRemoveChoice active';
                blockSelectedDepartment.className = (`container`);
                const id = document.createAttribute('id');
                id.value = target.innerText;
                blockSelectedDepartment.setAttributeNode(id);
                this.main.appendChild(blockSelectedDepartment);
                creating.selectedCards(target.innerText);
            }
        }

        const blockDepartments = document.createElement('DIV');
        blockDepartments.className = 'blockDepartments';

        //отработка событий при открытии/скрытии списка отделов
        titleListDepartmens.onclick = () => {
            const isActive = blockChoice.classList.toggle('active');
            if (isActive) {
                dropdownMenuButton.className = 'dropdownMenuButton active';
                const arrayDepartments = this.getDepartmentsFromLocalStorage();

                //формируем список отделов
                arrayDepartments.forEach(item => {
                    const menuItems = document.createElement('LI');
                    menuItems.className = item.name;
                    menuItems.innerText = item.name;

                    const buttonRemoveChoice = document.createElement('DIV');
                    buttonRemoveChoice.className = 'buttonRemoveChoice';

                    menuItems.appendChild(buttonRemoveChoice);
                    blockChoice.appendChild(menuItems);

                    return blockChoice;
                })
            } else {
                dropdownMenuButton.className = 'dropdownMenuButton';
                blockChoice.innerHTML = '';
            }
        }
        blockDepartments.append(titleListDepartmens, blockChoice);
        this.menu.append(blockDepartments);
    }

    deleteEmployee(id) {
        const employees = this.getEmployeesFromLocalStorage();
        const updatedEmployees = employees.map(item => {

            if (item.id === Number(id)) {
                item.fired = true;
            }
            return item;
        })

        this.setEmployeesToLocalStorage(updatedEmployees);
    }

    selectAllDepartment() {
        const allDepartmens = document.createElement('DIV');
        const buttonRemoveChoice = document.createElement('DIV');

        allDepartmens.className = 'allDepartmens';
        allDepartmens.innerText = 'Show all Departmens';

        allDepartmens.addEventListener('click', (event) => {
            event.preventDefault();

            allDepartmens.appendChild(buttonRemoveChoice);

            const isActive = event.target.classList.toggle('active');

            if (isActive) {
                buttonRemoveChoice.className = 'buttonRemoveChoice active';
                const blockWithAllDepartmens = document.createElement('DIV');
                blockWithAllDepartmens.className = 'blockDepartmens';
                const arrayDepartmens = this.getDepartmentsFromLocalStorage();
                arrayDepartmens.filter(item => {
                    // debugger
                    if (!(item.number === null)) {
                        const card = creating.createCardDepartment(item);
                        blockWithAllDepartmens.appendChild(card);
                        return card;
                    }
                });

                this.main.appendChild(blockWithAllDepartmens);
            } else {
                this.main.querySelector('.blockDepartmens').remove();
                buttonRemoveChoice.className = 'buttonRemoveChoice';
            }
        })
        this.menu.appendChild(allDepartmens);
    }

    removeDepartment(department) {
        const departments = this.getDepartmentsFromLocalStorage();
        const employeesDepartment = this.getEmployeesFromLocalStorage();
        const updateDepartmens = departments.map(item => {
            const updatedEmployees = employeesDepartment.map(data => {
                if (item.name === department && data.department === department) {
                    item.number = null;
                    data.fired = true;
                }
                return data;
            })
            this.setEmployeesToLocalStorage(updatedEmployees);
            return item;

        })
        this.setDepartmentToLocalStorage(updateDepartmens);
    }

    editEmployee(id) {
        const employee = this.getEmployeesFromLocalStorage().find(item => item.id === Number(id));
        new ModalEmployee().createModal(employee);
    }

    editDepartment(name) {
        const department = this.getDepartmentsFromLocalStorage().find(item => item.name === name);
        new ModalDepartment().createModal(department);

    }

}

const menu = new Menu();

class Card {
    constructor() {
        this.departments = menu.getDepartmentsFromLocalStorage();
        this.employees = menu.getEmployeesFromLocalStorage();
    }

    createCard(data) {
        const card = document.createElement('DIV');
        card.className = 'card';

        const titleCard = document.createElement('SPAN');
        titleCard.innerText = data.department;
        const ul = document.createElement('UL');
        ul.innerHTML = `
                        <li>${data.name} ${data.surname}</li>
                        <li>Salary: ${data.salary}</li>
                        <li>Fired: ${data.fired}</li>
                        <li>Post: ${data.post}</li>
                        `

        //блок с кнопками удаления и редактирования
        const blockButton = document.createElement('DIV');
        blockButton.className = 'blockButton';

        const deleteEmployee = document.createElement('BUTTON');
        deleteEmployee.name = data.id;
        deleteEmployee.className = 'deleteEmployee';
        deleteEmployee.innerText = 'Delete';

        deleteEmployee.onclick = ({ target }) => menu.deleteEmployee(target.name);

        const editEmployee = document.createElement('BUTTON');
        editEmployee.name = data.id;
        editEmployee.className = 'editEmploee';
        editEmployee.innerText = 'Edit';

        editEmployee.onclick = ({ target }) => {
            menu.editEmployee(target.name);
        }

        blockButton.append(deleteEmployee, editEmployee);
        card.append(titleCard, ul, blockButton);

        return card;
    }

    createCardDepartment(data) {
        const card = document.createElement('DIV');
        card.className = 'card';

        const titleCard = document.createElement('SPAN');
        titleCard.innerText = data.name;

        //блок с кнопками удаления и редактирования
        const blockButton = document.createElement('DIV');
        blockButton.className = 'blockButton';

        const deleteDepartment = document.createElement('BUTTON');
        deleteDepartment.name = data.name;
        deleteDepartment.className = 'deleteDepartment';
        deleteDepartment.innerText = 'Delete';

        deleteDepartment.onclick = ({ target }) => menu.removeDepartment(target.name);

        const editDepartment = document.createElement('BUTTON');
        editDepartment.name = data.name;
        editDepartment.className = 'editDepartment';
        editDepartment.innerText = 'Edit';

        editDepartment.onclick = ({ target }) => {
            menu.editDepartment(target.name);
        }

        blockButton.append(deleteDepartment, editDepartment);
        card.append(titleCard, blockButton);

        return card;
    }

    selectedCards(data, arrayEmployees) {
        // debugger
        arrayEmployees = arrayEmployees || this.employees;

        const blockSelectedDepartment = document.getElementById(`${data}`);
        arrayEmployees.filter(item => {
            // debugger
            if (item.department === data && !item.fired) {
                const card = this.createCard(item);
                blockSelectedDepartment.appendChild(card);
                return card;
            }
        })
    }

}

const creating = new Card();

class ModalDepartment {
    constructor() {
        this.modal = document.querySelector('.modalAddDepartment');
        this.modalContainer = document.querySelector('.containerAddDepartment');
        this.createModal();
    }
    createModal(department) {

        this.modalContainer.innerHTML = '';
        department = department || 0;

        this.modal.classList.add('active');

        const form = document.createElement('form');
        form.className = 'addDepartment';

        const spanTitle = document.createElement('span');
        spanTitle.innerText = 'Title department:';

        const spanNumber = document.createElement('span');
        spanNumber.innerText = 'Number department:';

        const inputNumber = document.createElement('input');
        inputNumber.type = "number";
        inputNumber.value = department.number || '';

        const inputTitle = document.createElement('input');
        inputTitle.type = "text";
        inputTitle.value = department.department || '';

        form.append(spanTitle, inputTitle, spanNumber, inputNumber);
        this.modalContainer.appendChild(form);

        const dataInputNumber = this.modalContainer.querySelector('.addDepartment > :nth-child(2)');
        const dataInputTitle = this.modalContainer.querySelector('.addDepartment > input:nth-child(4)');

        const saveDepartment = document.createElement('button');
        saveDepartment.innerText = 'Save';

        const cancel = document.createElement('button');
        cancel.innerText = 'Cancel';
        this.modalContainer.append(saveDepartment, cancel);

        saveDepartment.addEventListener('click', (event) => {
            event.preventDefault();
            const arrayDepartments = menu.getDepartmentsFromLocalStorage();

            //валидация формы отделов
            if (dataInputNumber.value !== undefined || dataInputTitle.value !== undefined) {
                const newDepartment = {
                    number: dataInputNumber.value,
                    name: dataInputTitle.value,
                };
                arrayDepartments.push(newDepartment);
                menu.setDepartmentToLocalStorage(arrayDepartments);
                this.modal.classList.remove('active');
            }
            throw new Error('Error! Data is not filled');
        })

        cancel.onclick = () => this.modal.classList.remove('active');

        this.modal.onclick = ({ target }) => {
            if (this.modal !== target) return;
            this.modal.classList.remove('active');
        }
    }
}

class ModalEmployee {
    constructor() {
        this.modal = document.querySelector('.modalAddEmployee');
        this.modalContainer = document.querySelector('.containerAddEmployee');
    }

    createModal(employee) {
        // debugger
        this.modalContainer.innerHTML = '';//зачищаем модалку, перед каждым входом
        employee = employee || 0;

        this.modal.classList.add('active');

        const form = document.createElement('form');
        form.className = 'addEmployee';

        const spanId = document.createElement('span');
        spanId.innerText = 'Id employee:';
        const inputId = document.createElement('input');
        inputId.type = 'number';
        inputId.value = employee.id || '';

        const spanDepartment = document.createElement('span');
        spanDepartment.innerText = 'Department:';
        const inputDepartment = document.createElement('input');
        inputDepartment.type = 'text';
        inputDepartment.value = employee.department || '';

        const spanName = document.createElement('span');
        spanName.innerText = 'Name:';
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.value = employee.name || '';

        const spanSurname = document.createElement('span');
        spanSurname.innerText = 'Surname:';
        const inputSurname = document.createElement('input');
        inputSurname.type = 'text';
        inputSurname.value = employee.surname || '';

        const spanSalary = document.createElement('span');
        spanSalary.innerText = 'Salary:';
        const inputSalary = document.createElement('input');
        inputSalary.type = 'number';
        inputSalary.value = employee.salary || '';

        const spanPost = document.createElement('span');
        spanPost.innerText = 'Post:';
        const inputPost = document.createElement('input');
        inputPost.type = 'text';
        inputPost.value = employee.post || '';

        form.append(
            spanId,
            inputId,
            spanDepartment,
            inputDepartment,
            spanName,
            inputName,
            spanSurname,
            inputSurname,
            spanSalary,
            inputSalary,
            spanPost,
            inputPost
        );

        this.modalContainer.append(form);

        const saveEmployee = document.createElement('button');
        saveEmployee.innerText = 'Save';

        const cancel = document.createElement('button');
        cancel.innerText = 'Cancel';

        this.modalContainer.append(saveEmployee, cancel);

        saveEmployee.addEventListener('click', (event) => {
            event.preventDefault();

            let arrayEmployees = menu.getEmployeesFromLocalStorage();
            if (
                inputId.value !== undefined ||
                inputDepartment.value !== undefined ||
                inputName.value !== undefined ||
                inputSurname.value !== undefined ||
                inputSalary.value !== undefined ||
                inputPost.value !== undefined) {

                const newEmployee = {
                    id: inputId.value,
                    department: inputDepartment.value,
                    name: inputName.value,
                    surname: inputSurname.value,
                    salary: inputSalary.value,
                    fired: false,
                    post: inputPost.value,
                };

                if (employee !== 0) {
                    arrayEmployees = arrayEmployees.map(item => {
                        console.log('newEmployee.id', newEmployee.id)
                        if (item.id === Number(newEmployee.id)) {
                            item.department = newEmployee.department;
                            item.name = newEmployee.name;
                            item.surname = newEmployee.surname;
                            item.salary = newEmployee.salary;
                            item.post = newEmployee.post;
                            return item;
                        }
                        return item;
                    })
                    menu.setEmployeesToLocalStorage(arrayEmployees);
                } else {
                    arrayEmployees.push(newEmployee);
                    menu.setEmployeesToLocalStorage(arrayEmployees);
                }
                this.modal.classList.remove('active');
            }
            throw new Error('Error! Data is not filled');
        });

        cancel.onclick = () => this.modal.classList.remove('active');

        this.modal.onclick = ({ target }) => {
            if (this.modal !== target) return;
            this.modal.classList.remove('active');
        }
    }
}
