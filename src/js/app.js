export default function validateNumber(phoneNumber) {
// function validateNumber(phoneNumber) {
    // удаляем все лишнее
    const deleteSymbol = phoneNumber.replace(/\D/g, '');

    console.log(`deleteSymbol: ${deleteSymbol}`);
    console.log(`deleteSymbol.length: ${deleteSymbol.length}`);

    let correctForm = null;

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

// try {
//     const phonenum = validateNumber('+86 000 000 ');
//     console.log(phonenum);
// } catch (error) {
//     console.error(error.message);
// }
