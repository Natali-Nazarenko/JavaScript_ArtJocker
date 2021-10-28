const departments = [
    {
        number: 1,
        name: 'Kitchen',
    },
    {
        number: 2,
        name: 'Bar',
    },
    {
        number: 3,
        name: 'Saloon',
    },
    {
        number: 4,
        name: 'Security',
    },
    {
        number: 5,
        name: 'Administration',
    },
    {
        number: 6,
        name: 'Cleaners',
    },
];

const employees = [
    {
        id: 1,
        numberDepartment: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 41000.0,
        fired: false,
        post: 'chef, head'
    },
    {
        id: 2,
        numberDepartment: 1,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 12000.0,
        fired: false,
        post: 'cook'
    },
    {
        id: 3,
        numberDepartment: 1,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 14800.0,
        fired: false,
        post: 'cook'
    },
    {
        id: 4,
        numberDepartment: 1,
        name: 'Анна',
        surname: 'Кугир',
        salary: 12430.0,
        fired: false,
        post: 'cook'
    },
    {
        id: 5,
        numberDepartment: 1,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 13150.0,
        fired: false,
        post: 'cook'
    },
    {
        id: 6,
        numberDepartment: 1,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 14300.0,
        fired: false,
        post: 'cook'
    },
    {
        id: 7,
        numberDepartment: 1,
        name: 'Денис',
        surname: 'Марченко',
        salary: 12730.0,
        fired: true,
        post: 'cook'
    },
    {
        id: 8,
        numberDepartment: 1,
        name: 'Максим',
        surname: 'Меженский',
        salary: 24190.0,
        fired: false,
        post: 'junior chef'
    },
    {
        id: 9,
        numberDepartment: 1,
        name: 'Антон',
        surname: 'Завадский',
        salary: 27900.0,
        fired: false,
        post: 'junior chef'
    },
    {
        id: 10,
        numberDepartment: 1,
        name: 'Игорь',
        surname: 'Скакунов',
        salary: 25260.0,
        fired: true,
        post: 'junior chef'
    },
    {
        id: 11,
        numberDepartment: 2,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 13000.0,
        fired: false,
        post: 'barman'
    },
    {
        id: 12,
        numberDepartment: 2,
        name: 'Денис',
        surname: 'Свистун',
        salary: 10000.0,
        fired: false,
        post: 'barman'
    },
    {
        id: 13,
        numberDepartment: 3,
        name: 'Сергей',
        surname: 'Сокет',
        salary: 12000.0,
        fired: false,
        post: 'waiter'
    },
    {
        id: 14,
        numberDepartment: 3,
        name: 'Татьяна',
        surname: 'Сергиенко',
        salary: 14800.0,
        fired: false,
        post: 'waiter'
    },
    {
        id: 15,
        numberDepartment: 3,
        name: 'Анна',
        surname: 'Стоцкая',
        salary: 12430.0,
        fired: false,
        post: 'waiter'
    },
    {
        id: 16,
        numberDepartment: 3,
        name: 'Татьяна',
        surname: 'Великая',
        salary: 13150.0,
        fired: false,
        post: 'steward, head'
    },
    {
        id: 17,
        numberDepartment: 3,
        name: 'Станислав',
        surname: 'Валоков',
        salary: 11730.0,
        fired: false,
        post: 'waiter'
    },
    {
        id: 18,
        numberDepartment: 3,
        name: 'Денис',
        surname: 'Харченко',
        salary: 12730.0,
        fired: true,
        post: 'waiter'
    },
    {
        id: 19,
        numberDepartment: 4,
        name: 'Максим',
        surname: 'Сток',
        salary: 14000.0,
        fired: false,
        post: 'security guard'
    },
    {
        id: 20,
        numberDepartment: 4,
        name: 'Антон',
        surname: 'Вялый',
        salary: 17900.0,
        fired: false,
        post: 'security guard'
    },
    {
        id: 21,
        numberDepartment: 6,
        name: 'Инна',
        surname: 'Светолина',
        salary: 8600.0,
        fired: true,
        post: 'cleaner'
    },
    {
        id: 22,
        numberDepartment: 6,
        name: 'Света',
        surname: 'Егорина',
        salary: 8600.0,
        fired: true,
        post: 'cleaner'
    },
    {
        id: 23,
        numberDepartment: 5,
        name: 'Екатерина',
        surname: 'Ворон',
        salary: 130000.0,
        fired: false,
        post: 'director, head'
    },
    {
        id: 24,
        numberDepartment: 5,
        name: 'Алла',
        surname: 'Счет',
        salary: 41300.0,
        fired: false,
        post: 'accountant'
    },
    {
        id: 25,
        numberDepartment: 5,
        name: 'Ольга',
        surname: 'Подворот',
        salary: 21300.0,
        fired: false,
        post: 'clerk'
    },
    {
        id: 26,
        numberDepartment: 5,
        name: 'Сергей',
        surname: 'Зубатый',
        salary: 31500.0,
        fired: false,
        post: 'purchasing manager'
    },
    {
        id: 27,
        numberDepartment: 5,
        name: 'Яна',
        surname: 'Стиль',
        salary: 41900.0,
        fired: false,
        post: 'brand manager'
    },
];
