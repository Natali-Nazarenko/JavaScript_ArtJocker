//#1 Написать регулярное выражение проверки номера телефона по формату +сс(mmm)xxx-xx-xx.
//Где cc - код страны, mmm - код мобильного оператора, x - номер телефона


const validatePhone = (string) => {

    let regularPattern = new RegExp(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/);

    return string.search(regularPattern);
}


//#2 Написать регулярное выражение проверки на email

const validateEmail = (string) => {

    let regularPattern = new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+\.*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-.]+\.([a-zA-Z0-9]){1,3}$/);

    return string.search(regularPattern);;
}


//#3 Написать регулярное выражение проверку на сайт: http://test.dev

const validateSite = (string) => {

    let regularPattern = new RegExp(/^(http):\/\/(test)\.(dev)$/);

    return string.search(regularPattern);
}


//#4 Написать регулярное выражение проверки пароля, который должен быть минимум 6 символов, максимум 25, 
//состоять из латинских символов и цифр, может содержать в себе знак подчеркивания

function validatePassword(string) {

    let regularPattern = new RegExp(/^([a-zA-Z0-9_]){6,25}$/);

        return string.search(regularPattern);
}


//#5 Проверить строку на валидность ipv4 адреса 

function validateIPV4(string) {

    let regularPattern = new RegExp(/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/);

    return string.search(regularPattern);
}
