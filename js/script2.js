var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name + ' with capital in ' + item.capital;
        countriesList.appendChild(liEl);
    });

}

document.getElementById('search').addEventListener('click', searchCountries);