function start() {
    //document.querySelector é semelhante ao PROCV - EXCEL
    //document.getElementById = procura por um elemento com determinado "id"
    var buttonCalculateImc = document.querySelector('#calculate-imc');
    //Adição de escuta de um evento, neste caso um click
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}
function calculateImc(weight, height) {
    return weight / (height * height);
}
function getWeightHate(imc) {
    if (imc >= 16 && imc <= 16.9) {
        return 'Você está muito abaixo do peso.'
    } else if (imc >= 17 && imc <= 18.4) {
        return 'Abaixo do peso.'
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal.'
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Acima do peso.'
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade Grau I.'
    } else if (imc >= 35 && imc <= 40) {
        return 'Obesidade Grau II.'
    } else if (imc > 40) {
        return 'Obesidade Grau III.'
    }
    return 'Faixa de IMC inválida.'
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    //Armazene na variável bmiRate o elemento HTML que possui o id "bmi-rate"
    var bmiRate = document.querySelector('#bmi-rate');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    //Armazene na variável bmi o resultado da função "getWeightHate"
    var bmi = getWeightHate(imc);
    var formatedImc = imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formatedImc;
    //Atribua ao elemento HTML o valor armazenado na variável "getWeightHate"
    bmiRate.textContent = bmi;      
}
start()