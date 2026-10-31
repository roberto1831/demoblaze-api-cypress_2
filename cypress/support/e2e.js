// Registro Mochawesome Reporter para que genere automáticamente
// los reportes HTML al finalizar la ejecución de las pruebas.
import "cypress-mochawesome-reporter/register";

// Cargo los comandos personalizados definidos en commands.js,
// como el comando reutilizable apiRequest.
import "./commands";