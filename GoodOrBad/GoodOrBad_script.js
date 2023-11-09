
document.getElementById('askA').addEventListener('click', () => {
    alert("Вие НЕ чухте отговора на A")
});
document.getElementById('askB').addEventListener('click', () => {
    alert("A каза, че е негодник.")
});
document.getElementById('askC').addEventListener('click', () => {
    alert("Не, не вярвай на B, той лъже!")
});

function changeTextOne(){
    document.getElementById('replace-me').innerText = "Питате B: Какво каза A?"
}
function changeTextTwo(){
    document.getElementById('replace-me').innerText = "Питате C: Това вярно ли е?"
}
function changeTextThree(){
    document.getElementById('replace-me').innerText = "Какви са B и C?"
}

document.getElementById('revealAnswer').addEventListener('click', () => {
    document.getElementById('result').textContent = "Никой за себе си не може да каже, че е негодник. Ако негодник каже за себе си че е такъв, то той ще казва истината, пък те винаги лъжат. Ако благородник каже за себе си, че е негодник, то той ще лъже, а те винаги казват истината => следователно: ако А е негодник, В казва истината, но няма как А да е казал, че той самия е негодник ако А е благородник, то В лъже (значи е негодник) и С казва истината Значи В е негодник, а С е благородник !"
});

function checkString() {
    
    let inputValue = document.getElementById("txtField").value;
    let predefinedString = "А - Благородник; B - Негодник; C - Благородник;";

    let result = inputValue === predefinedString;

    let resultElement = document.getElementById('result');
    if (result) {
        resultElement.textContent = "Верен Отговор !!!";
    } else {
        resultElement.textContent = "Грешен Отговор !!!";
    }
}