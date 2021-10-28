class Restaurant {
    constructor(departmentArray = departments, employeesArray = employees) {
        this.departments = departmentArray;
        this.employees = employeesArray;
    };

    getSumSalarysDepartments() {
        const allSumSalarysDepartments = [];

        for (let item of this.departments) {
            let sumAndDepartmens = {};
            let sumSalarys = 0;

            for (let data of this.employees) {

                if (item.number === data.numberDepartment) {
                    sumSalarys += data.salary;
                }
            }
            sumAndDepartmens = {
                [item.name]: sumSalarys,
            }
            allSumSalarysDepartments.push(sumAndDepartmens);
        }

        return allSumSalarysDepartments;
    };

    getMiddleSalaryDepartment(department) {
        let sumSalarys = 0;
        let count = 0;

        const numberDepartment = this.findNumberDepartment(department);

        for (let item of this.employees) {

            if (item.numberDepartment === numberDepartment) {
                sumSalarys += item.salary;
                count++;
            }
        }

        return ~~(sumSalarys / count);
    };

    getMinimalSalaryDepartment(department) {
        const arraySalary = [];
        // debugger
        const numberDepartment = this.findNumberDepartment(department);

        for (let item of this.employees) {
            if (item.numberDepartment === numberDepartment) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    };

    getTopSalaryDepartment(department) {
        let topSalary = 0;
        const numberDepartment = this.findNumberDepartment(department);

        for (let item of this.employees) {

            if (item.numberDepartment === numberDepartment) {

                if (topSalary < item.salary) {
                    topSalary = item.salary;
                }
            }
        }

        return topSalary;
    };

    getMinimalSalaryPost(post) {
        const arraySalary = [];

        for (let item of this.employees) {

            if (item.post.includes(post)) {
                arraySalary.push(item.salary);
            }
        }

        return Math.min(...arraySalary);
    };

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
    };

    getAmountFiredEmployees() {
        let count = 0;
        for (let item of this.employees) {

            if (item.fired) {
                count++;
            }
        }

        return count;
    };

    getDepartmentWithoutHead() {
        // debugger
        const searchParametr = ' head';
        let departmentsWithoutHead = [];

        for (let item of this.employees) {

            if (item.post.includes(searchParametr)) {
                for (let data of this.departments) {

                    if (data.number === item.numberDepartment) {
                        departmentsWithoutHead.push(data.name);
                    }
                }
            }
        }

        return departmentsWithoutHead;
    };

    findNumberDepartment(department) {
        let numberDepartment = 0;

        for (let data of this.departments) {

            if (data.name === department) {
                numberDepartment = data.number;
                break;
            }
        }

        return numberDepartment;
    };
};

const restaurant = new Restaurant();
console.log(restaurant.getSumSalarysDepartments());
console.log(restaurant.getMiddleSalaryDepartment('Saloon'));
console.log(restaurant.getMinimalSalaryDepartment('Kitchen'));
console.log(restaurant.getTopSalaryDepartment('Kitchen'));
console.log(restaurant.getMinimalSalaryPost('chef'));
console.log(restaurant.getTopSalaryPost('cook'));
console.log(restaurant.getAmountFiredEmployees());
console.log(restaurant.getDepartmentWithoutHead());
