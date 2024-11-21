document.getElementById("readFile").addEventListener("click", function () {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const arrayBuffer = reader.result;
            processBinaryFile(arrayBuffer);
        };
        reader.readAsArrayBuffer(file);
    }
});

function processBinaryFile(buffer) {
    const view = new DataView(buffer); // Usa DataView para leer datos binarios
    let output = "";

    // Ejemplo: Leer los primeros 100 bytes
    for (let i = 0; i < 100; i++) {
        const value = view.getUint8(i); // Lee un byte
        const letra = String.fromCharCode(value);
        output += `Letra ${i + 1}: ${letra}\n`;
    }

    // Mostrar el resultado
    document.getElementById("output").textContent = output;
}
