document.addEventListener("DOMContentLoaded", function() {
    const checkHostBtn = document.getElementById("checkHostBtn");
    const hostnameInput = document.getElementById("hostname");
    const hostResult = document.getElementById("hostResult");

    checkHostBtn.addEventListener("click", function() {
        const hostname = hostnameInput.value;
        if (hostname) {
            checkHost(hostname);
        } else {
            hostResult.textContent = "Please enter a hostname.";
        }
    });

    function checkHost(hostname) {
        fetch(`https://api.github.io/check?host=${hostname}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === "reachable") {
                    hostResult.textContent = `Host ${hostname} is reachable.`;
                } else {
                    hostResult.textContent = `Host ${hostname} is not reachable.`;
                }
            })
            .catch(error => {
                console.error("Error checking host:", error);
                hostResult.textContent = "An error occurred while checking the host.";
            });
    }
});