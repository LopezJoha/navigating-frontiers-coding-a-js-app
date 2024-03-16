var os = require("os");

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

console.log("Informacion del usuario: " + os.userInfo().username);
console.log("memoryFree: " + os.freemem());
console.log("Ram Total :  " + os.totalmem());
console.log("CPU: " + os.arch());

let userName = os.userInfo().username;
let memoryFree = os.freemem();
let Ram = os.totalmem();
let Cpu = os.arch();

const totalMemGB = Ram / (1024 * 1024 * 1024);
const freeMemGB = memoryFree / (1024 * 1024 * 1024);

console.log("total memorian en GB " + totalMemGB);
console.log("total memorian libre en GB " + freeMemGB);

const fs = require("fs");
const content = [
  {
    propiedades: {
      "Nombre de usuario": userName,
      "Memoria Libre": memoryFree,
      Ram: Ram,
      Cpu: Cpu,
      "Total Memoria en Gb": totalMemGB + "GB",
      "Espacio Libre en memorial": freeMemGB.toFixed(2) + "GB",
    },
  },
];

const creatingFile = () => {
  fs.writeFile("result.json", JSON.stringify(content), (err) => {
    if (err) {
      console.error("Esto es el error" + err);
    } else {
      console.log("file written successfully");
    }
  });
};

async function leerArchivoJson() {
  fs.readFile("./result.json", "utf8", (error, data) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
      return;
    }
    const datos = JSON.parse(data);
    console.log(datos); 
  });
}

creatingFile();
leerArchivoJson();
