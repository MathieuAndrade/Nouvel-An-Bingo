function saveData(data) {
    return fetch(`http://${window.location.hostname}:5000/write`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch((e) => console.log(e))
}

function getData() {
    return fetch(`http://${window.location.hostname}:5000/read`)
        .then(response => response.json())
        .catch((e) => console.log(e))
}

export {
    saveData,
    getData
}