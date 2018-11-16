window.onload = function() {
    const input = document.querySelector('#country');
    const lookup = document.querySelector('#lookup');
    const display = document.querySelector('#result');
    
    lookup.addEventListener('click', getCountryInfo);
    
    
    function getCountryInfo() {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    display.innerHTML = this.responseText;
                } else {
                    alert("There was an error.");
                }
            }
        };
        console.log(input.value);
        http.open('GET',`./world.php?country=${input.value}`, true);
        http.send();
    }
    
};