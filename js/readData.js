export function readData(category) {
    return fetch("/data.json")
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        return data[category];
    })
}