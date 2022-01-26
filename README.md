# Aplicación lista de tareas

Proyecto de práctica, de lista de tareas con inicio de sesión y registro de usuarios.

![Perfil principal.](https://github.com/Francooo2/meOrganizoApp/blob/main/src/public/img/profile.png?raw=true "Perfil principal")


### Pre-requisitos 📋

Debes tener previamente instalado en tu equipo lo siguiente:

```
Node.js, git, MySql, XAMPP
```

### Instalación 🔧

Clona el proyecto.

```
git clone https://github.com/Francooo2/meOrganizoApp.git
```

Abre tu editor de preferencia, y por consola ejecuta lo siguiente para instalar dependencias del proyecto.

```
npm i
```

Ejecuta el script db.sql, que se encuantra en la carpeta database, en tu motor de base de datos de preferencia.

Luego crea un archivo .env en el proyecto con la siguiente estructura.

```
DATABASE           = ...
DATABASE_HOST      = ...
DATABASE_USER      = ...
DATABASE_PASSWORD  = ...
JWT_SECRET         = ...
JWT_EXPIRES_IN     = ...
JWT_COOKIE_EXPIRES = ...
```

## Ejecutando el proyecto ⚙️

Para ejecutar el proyecto, luego de completar los pasos anteriores, ejecuta el siguiente comando por conasola, mientrasm tienes XAMPP corriendo.

```
npm run start
```
Una vez ejecutado npm run start, se debería ver la siguiente salida por consola.

```
Servidor corriendo en el puerto 5000
DB is conected
```

## Construido con 🛠️

* [Node js](https://nodejs.org/es/) - Entorno de ejecución javascript para el backend.
* [Express](https://expressjs.com/es/) - infraestructura de aplicaciones web Node.js.
* [JWT](https://jwt.io/) - Método de autenticación.
* [hbs](https://handlebarsjs.com/) - Motor de plantillas utilizado.

---
⌨️ Feliz código, [Franco](https://github.com/Francooo2) 😊
