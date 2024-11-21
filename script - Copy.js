let currentFile = null; // Variable global para almacenar el archivo seleccionado

document.getElementById("fileInput").addEventListener("change", function (event) {
	currentFile = event.target.files[0]; // Guarda el archivo seleccionado
	if (currentFile) {
		readFile(currentFile); // Lee el archivo
		document.getElementById("readAgain").disabled = false; // Habilita el botón
	}
});

document.getElementById("readAgain").addEventListener("click", function () {
	if (currentFile) {
		readFile(currentFile); // Vuelve a leer el archivo
	}
});

function readFile(file) {
	const reader = new FileReader();
	reader.onload = function () {
		const arrayBuffer = reader.result; // Obtén los datos binarios como ArrayBuffer
		processBinaryFile(arrayBuffer);
	};
	reader.readAsArrayBuffer(file); // Lee el archivo como ArrayBuffer
}

function processBinaryFile(buffer) {
	const view = new DataView(buffer); // Usa DataView para leer datos binarios
	let output = "";

	// Ejemplo: Leer los primeros 10 floats (4 bytes cada uno)
	for (let i = 0; i < 100; i++) {
		const value = view.getUint8(i * 4, true); // Lee un float (little-endian)
		const letra = String.fromCharCode(value)
		// output += `Valor ${i + 1}: ${value}\n`;
		output += `Letra ${i + 1}: ${letra}\n`;
	}

	// Mostrar el resultado
	document.getElementById("output").textContent = output;
}