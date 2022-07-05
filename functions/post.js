let _data = {
    "Key1": "value1"
}

fetch('https://f18hg1tp0d.execute-api.us-east-1.amazonaws.com/dev', {
    method: "POST",
    body: JSON.stringify(_data), headers: { "content-type": "application/json" }
})

    .then(response => response.json())
    .then(json => console.log(json));
