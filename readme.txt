--------------------------------------------
PRUEBA DE API - SIGNUP Y LOGIN EN DEMOBLAZE
--------------------------------------------
Herramienta: Cypress (cy.request)
Autor: Ing.Roberto Fernando Toapanta Valencia

---------------------------------------------------
EN ESTE EJERCICIO EJECUTAMOS LAS SIGUIENTES PRUEBAS
---------------------------------------------------
Tenemos dos servicios REST de DemoBlaze:
  * Signup: https://api.demoblaze.com/signup
  * Login: https://api.demoblaze.com/login

En los 4 casos solicitados, identificamos entradas y salidas correspondientes que se van registrando como evidencia
de la ejecución:
  1. Crear un usuario nuevo en signup
  2. Intentar crear un usuario ya existente
  3. Login con usuario y password correcto
  4. Login con usuario y password incorrecto

COMO REQUISITOS PRINCIPALES SON
* Node.js 18 o superior   (verificar con el comando: node -v)
* npm                     (verificar con el comando: npm -v)
* Conexión a internet

-------------------------------
COMO LO EJECUTAMOS ESTA PRUEBA
-------------------------------

1. Abrir un nuevo terminal en la carpeta raíz del proyecto (donde esta package.json).

2. Instalamos las dependencias (solo la primera vez):
       npm install

3. Si deseamos ejecutar en Modo visual (abre la interfaz de Cypress):
       npx cypress open

   Seleccionamos E2E Testing --> Chrome --> demoblaze-api.cy.js

4. Si deseamos ejecutar por la consola más el reporte:
       npx cypress run

-----------------------------------------------
DONDE REVISAMOS LOS RESULTADOS DE LA EJECUCIÓN
-----------------------------------------------
* En la ruta Reporte HTML: cypress/reports/
  Abrimos el index en el navegador

* Por consola solo tendremos el mensaje:
  4 passing
  Si todas las pruebas se ejecutaron correctamente.

-----------------------------------
COMO ESTA ESTRUCTURADO EL PROYECTO
-----------------------------------
* cypress/e2e/demoblaze-api.cy.js
  Contiene los 4 casos implementados de Signup y Login.

* cypress/support/commands.js
  Contiene el comando reutilizable apiRequest para centralizar las llamadas a la API.

* cypress/support/e2e.js
  Contiene la configuración de soporte y reporter utilizada por Cypress.

* cypress.config.js
  Contiene la configuración general del proyecto y asi también del reporter Mochawesome.

---------------
NOTAS TÉCNICAS
---------------

* La contraseña se envía codificada en Base64 a traves de la función btoa(). Asi la espera la API.

* La API responde con un HTTP 200 en escenarios que puede ser exitosos o erróneos, Por esta razón
  utilizamos failOnStatusCode: false y también las validaciones sobre el contenido del body en la respuesta.

* El usuario se genera de una manera unica en cada ejecución mediante Date.now(), evitando tener
  conflictos creados en las pruebas anteriores.

* También implementamos un apiRequest que es un comando reutilizable para unificar las llamadas a la
  API y asi evitamos un duplicado de código.