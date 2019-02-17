var url = "http://api.icndb.com/jokes/random";

var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
    getJoke();
});
getJoke();

var container = document.getElementById('joke');

function getJoke() {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
        var response = JSON.parse(request.response);
        if (request.status == 200) {
            container.classList.add('bgwhite');
            container.innerHTML = response.value.joke;
        }
    });

    request.send();
};