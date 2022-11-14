//############################################################//
// Increment Element Function
//############################################################//
function increment(element) {
    element.innerText++;
}

//############################################################//
// Hide Element Function
//############################################################//
function hide(element) {
    element.remove();
}

//############################################################//
// Alert Function
//############################################################//
function selectChange(element) {
    if (element.options[element.selectedIndex].value == 'Cat')
        alert('You are looking for a cat');
    if (element.options[element.selectedIndex].value == 'Dog')
        alert('You are looking for a dog');
    if (element.options[element.selectedIndex].value == 'Bunny')
        alert('You are looking for a bunny');
    if (element.options[element.selectedIndex].value == 'Bird')
        alert('You are looking for a Bird');
}