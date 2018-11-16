window.onload = function() {
    const input = document.querySelector('input#text');
    const lookup = document.querySelector('button');
    const display = document.querySelector('#result');
    
    lookup.addEventListener('click', getCountryInfo);
    
    
    function getCountryInfo() {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200 ) {
                display.innerHTML = this.responseText;
            } else {
                alert('Something went wrong with the request');
            }
        }
        http.open('GET',`./world.php?country=${input.value}`, true);
        http.send();
    }
    
};