export default function validateNumber(phoneNumber) {

    // удаляем все лишнее
    const deleteSymbol = phoneNumber.replace(/\D/g, '');

    let correctForm = null;

    // логика замены - для китая и россии
    if (deleteSymbol.length == 12 && deleteSymbol.startsWith('86')) {
        console.log(deleteSymbol)
        correctForm = '+8' + deleteSymbol.slice(1);
    } else if (deleteSymbol.length == 10) {
        correctForm = '+7' + deleteSymbol;
    } else if (deleteSymbol.length == 11) {
        correctForm = '+7' + deleteSymbol.slice(1);
    }
    else {
        throw new Error('Uncorrect number phone');
    }
    return correctForm;
}
