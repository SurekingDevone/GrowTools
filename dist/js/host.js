document.getElementById('hostCheckForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var host = document.getElementById('hostInput').value;
    var resultDiv = document.getElementById('hostCheckResult');
    resultDiv.innerHTML = 'Checking...';

    fetch('https://check-host.net/check-tcp?host=' + encodeURIComponent(host))
        .then(response => response.text())
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            resultDiv.innerHTML = 'Error: ' + error.message;
        });
});