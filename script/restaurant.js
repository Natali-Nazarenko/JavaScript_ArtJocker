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
        this.department = departments;
        this.employee = employees;
        this.selectDepartment();
    }

    createMenu() {
        
    }

    selectDepartment() {
        // debugger
        const blockDepartment = document.createElement('DIV');
        blockDepartment.className = 'blockDepartment';

        const title = document.createElement('DIV');
        title.className = 'departmens';
        title.innerHTML = '<span>Departmens</span>';

        const dropdownMenuButton = document.createElement('DIV');
        dropdownMenuButton.className = 'dropdownMenuButton';
        title.appendChild(dropdownMenuButton);

        const blockChoice = document.createElement('UL');
        blockChoice.className = 'blockChoice';

        this.department.forEach(item => {
            const menuItems = document.createElement('LI');
            menuItems.className = item.name;
            menuItems.innerText = item.name;

            const removeChoiceButton = document.createElement('DIV');
            removeChoiceButton.className = 'removeChoiceButton';

            menuItems.appendChild(removeChoiceButton);
            blockChoice.appendChild(menuItems);

            return blockChoice;
        })

        blockChoice.onclick = ({ target }) => {
            const blockDepartment = document.createElement('DIV');

            const removeButton = target.querySelector('.removeChoiceButton');
            const isActive = target.classList.toggle('active');
            if (!isActive) {

                console.log(target.innerText)
                console.log(isActive)
                removeButton.className = 'removeChoiceButton';
                const removeBlockDepartment = document.getElementById(`${target.innerText}`);
                console.log(removeBlockDepartment)
                removeBlockDepartment.remove();
            } else {
                removeButton.className = 'removeChoiceButton active';
                blockDepartment.className = (`container`);
                const id = document.createAttribute('id');
                id.value = `${target.innerText}`;
                blockDepartment.setAttributeNode(id);


                this.employee.forEach(item => {
                    const employee = new Card();

                    if (item.department === target.innerText) {
                        const newCard = employee.createCard(item);
                        blockDepartment.appendChild(newCard);
                    }

                    return employee;
                })
                this.main.appendChild(blockDepartment);
            }
        }

        blockDepartment.append(title, blockChoice);

        title.onclick = () => {
            const isActive = blockChoice.classList.toggle('active');
            dropdownMenuButton.className = `${isActive ? "dropdownMenuButton active" : "dropdownMenuButton"}`
        }
        this.menu.append(blockDepartment);

        return blockDepartment;
    }

    deleteEmploee() {
        const 
    }
}
const menu = new Menu();

class Card {
    constructor() {
        this.employees = employees;
    }

    createCard(data) {
        const card = document.createElement('DIV');
        card.className = 'card';

        const titleCard = document.createElement('SPAN');
        titleCard.innerText = data.department;
        const ul = document.createElement('UL');
        this.employees.forEach(item => {
            if (item.department === data.department) {
                ul.innerHTML = `
                        <li>${item.name} ${item.surname}</li>
                        <li>Salary: ${item.salary}</li>
                        <li>Fired: ${item.fired}</li>
                        <li>Post: ${item.post}</li>
                        `
            }

            return ul;
        })
        //блок с кнопками удаления и редактирования
        const blockButton = document.createElement('DIV');
        blockButton.className = 'blockButton';

        const deleteEmploee = document.createElement('BUTTON');
        deleteEmploee.className = 'deleteEmploee';
        deleteEmploee.innerText = 'Delete';

        const editEmploee = document.createElement('BUTTON');
        editEmploee.className = 'editEmploee';
        editEmploee.innerText = 'Edit';


        blockButton.append(deleteEmploee, editEmploee);

        card.append(titleCard, ul, blockButton);

        return card;
    }
}


