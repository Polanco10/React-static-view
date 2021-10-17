# React Static View
_Aplicacion básica dockerizada, creada con Node js + Express + Postgres + React._

_Se utiliza react como template engine._

### Pre-requisitos 📋

_Instalar docker._

## Develpment mode ⚙️

_Primero se debe cambiar el host de development en el archivo config.json a "localhost"._

_Para ejecutar la base de datos en el contenedor se debe ejecutar:_

```
docker run -it -e "POSTGRES_HOST_AUTH_METHOD=trust" -p 5432:5432 postgres
```
_Para realizar las migraciones y el seed se deben ejecutar:_

```
rpm run migrate
```
```
rpm run seed
```
## Production mode ⚙️

_Para ejecutar la aplicación en Production mode se debe realizar el siguiente comando:_

```
docker-compose up
```



