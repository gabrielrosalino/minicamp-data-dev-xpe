function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    calculateNutritionGrade()

    handleButtonClick();
};

function calculateImc(weight, height){
    return weight / (height ** 2)
}

function handleButtonClick(){
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcGrade = document.querySelector('#imc-grade');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height).toFixed(2);

    imcResult.textContent = imc.replace('.', ',');
    imcGrade.textContent = calculateNutritionGrade(imc);
}

function calculateNutritionGrade(imc) {

    console.log(imc);

    if (imc >= 16 && imc < 17) {
        return 'Muito Abaixo do Peso';
    } else if (imc >= 17 && imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do Peso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade Grau II';
    } else if (imc >= 40) {
        return 'Obesidade Grau III';
    } else {
        return 'Fora das Grades de Nutrição (valores inválido)';
    };
}

start();