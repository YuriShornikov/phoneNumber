export default function validateNumber(phoneNumber) {
    // удаляем все лишнее
    const deleteSymbol = phoneNumber.replace(/\D/g, '');

    let correctForm;

    if (deleteSymbol.length == 12 || deleteSymbol.startsWith('86')) {
        correctForm = '+8' + deleteSymbol.slice(1);
    } else if (deleteSymbol.length == 10) {
        correctForm = '+7' + deleteSymbol;
    } else if (deleteSymbol.length == 11) {
        correctForm = '+7' + deleteSymbol.slice(1);
    } 
    // else {
    //     console.log('Uncorrect number phone')
        
    // }
    return correctForm;
}