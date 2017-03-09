var ezTable = function () {
	var Tafel = document.getElementById("Tafel");
	var input = document.getElementById('input');
	var value = input.value;
	var output = "";

	for (i = 0; i <= 10; i++) { 
    	output = Number(value) * Number(i);

    	if (i == 0) {
    		var row = table.insertRow(i);
    		var cell1 = row.insertCell(0);
    		cell1.innerHTML = "De tafel van " + value + "!";
    	} else {
    		var row = table.insertRow(i);
    		var cell1 = row.insertCell(0);
    		cell1.innerHTML = i + " x " + value + " = " + output;
    	}
	}
}