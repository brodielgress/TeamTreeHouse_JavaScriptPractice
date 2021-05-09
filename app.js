const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

myTextInput.addEventListener('keypress', function (e) {
    myHeading.style.color = myTextInput.value;
})