
const counter = document.getElementById("visits")
let res = ""

fetch('https://f18hg1tp0d.execute-api.us-east-1.amazonaws.com/dev')
    .then(response => response.json())
    .then(data => counter.textContent = data);

