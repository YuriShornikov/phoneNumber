export default function validateNumber(phoneNumber) {

    let correctForm = null;
    const createError = function() {
        throw new Error('Uncorrect number phone');
    }

    // удаляем все символы, кроме цифр
    let deleteSymbol = phoneNumber.replace(/\D/g, '');

    // логика теста
    if (/^\+{0,1}[1-9]\d{1}[-\s(]/.test(phoneNumber)) {
        
        if (deleteSymbol.length == 12) {
            correctForm = '+' + deleteSymbol;
            return correctForm;
        } else{
            createError();
        }  
    } else if (deleteSymbol.length == 10) {
        correctForm = '+7' + deleteSymbol;
    } else if (deleteSymbol.length == 11) {
        correctForm = '+7' + deleteSymbol.slice(1);
    }
    else {
        createError();
    }
    return correctForm;
}
