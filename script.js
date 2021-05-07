function getMetal() {
    const api_key = document.getElementById('api-key');
    const Url = `https://www.metals-api.com/api/latest?access_key=${api_key.value}`;
    const main = document.getElementById('main');
    main.innerHTML = `<h2>Processing...</h2>`
    fetch(Url)
    .then(data=>{return data.json()})
    .then(
        res=>{
            main.innerHTML = `
            <h2>Latest Metal Prices</h2>
            <p><b>Gold:</b> $${(1 / Number(res['rates']['XAU'])).toFixed(2)}</p>
            <p><b>Silver:</b> $${(1 / Number(res['rates']['XAG'])).toFixed(2)}</p>
            <p><b>Platinum:</b> $${(1 / Number(res['rates']['XPT'])).toFixed(2)}</p>
            <footer class="small">As of <em>${returnDate(res['timestamp'])}<em></footer>`
        });
}

function returnDate(timestamp) {
    const output = new Date(timestamp * 1000);
    return output;
}

