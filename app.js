function Clicker = function(){
	//some code
}

var clicker = new Clicker();


var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };