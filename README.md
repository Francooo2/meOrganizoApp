# Cobro de impuestos a clientes

Proyecto de práctica, que permite aplicar un impuesto especifico a determinado cliente, según su monto bruto anual y deducciones.

![Alt text](assets/img/profile.png?raw=true "Optional Title")


### Pre-requisitos 📋

Debes tener previamente instalado en tu equipo lo siguiente:

```
Node.js, git
```

### Instalación 🔧

Clona el proyecto.

```
git clone https://github.com/Francooo2/impuestos.git
```

Abre tu editor de preferencia, y por consola ejecuta lo siguiente para instalar dependencias del proyecto.

```
npm i
```

## Ejecutando el proyecto ⚙️

Para ejecutar el proyecto, luego de completar los pasos anteriores, ejecuta el siguiente comando por conasola.

```
npm run start
```

el comando anterior ejecuta automaticamente lo suiguiente desde package.json, la primera parte convierte el proyecto a ES5 y la segunta ejecuta el archivo main.js previamente convertido de la carpeta dist.

```
npx babel src/ -d dist/ && node dist/main.js
```

Una vez ejecutado npm run start, se debería ver la siguiente salida por consola.

```
Successfully compiled 3 files with Babel (2511ms).
El impuesto 1 de Javier es $ 226800
El impuesto 3 de Javier es $ 172200
El impuesto 4 de Francisca es $ 252000
El impuesto 5 de Francisca es $ 181650
```

En caso de querer aplicar otros impuestos a los clientes se debe manipular el archivo main.js de la carpeta src, y posteriormente volver a ejecutar npm run start por consola.

---
⌨️ Feliz código, [Franco](https://github.com/Francooo2) 😊