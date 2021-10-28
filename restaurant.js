class Restaurant {
    constructor(departmentArray = departments, employeesArray = employees) {
        this.departments = departmentArray;
        this.employees = employeesArray;
    };

    getSumSalarysDepartments() {
        const sumAllSalarysDepartments = [];

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
            sumAllSalarysDepartments.push(sumAndDepartmens);
        }

        return sumAllSalarysDepartments;
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

        return Math.floor(sumSalarys / count);
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

    getAmountFiredEmployees(isFired) {
        let count = 0;
        for (let item of this.employees) {

            if (item.fired === isFired) {
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

            if (data.name.toLowerCase() === department.toLowerCase()) {
                numberDepartment = data.number;
                break;
            }
        }

        return numberDepartment;
    };
};

const restaurant = new Restaurant();
