document.getElementById('hostCheckForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var host = document.getElementById('hostInput').value;
    var resultDiv = document.getElementById('hostCheckResult');
    resultDiv.innerHTML = 'Checking...';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'check_host.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resultDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.send('host=' + encodeURIComponent(host));
});