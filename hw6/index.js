function inputNumber() {
    let number = Number(prompt('Please, input number'));

    while(isNaN(number)) {
        number = Number(prompt('Error, please, input number again'));
    }

    return number;
}

const firstNumber = inputNumber();
const secondNumber = inputNumber();
const thirdNumber = inputNumber();

const aver = (firstNumber + secondNumber + thirdNumber) / 3;

alert(`Averange of ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${aver}`);