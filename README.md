# Backend Adopción Mascotas

Api Rest con Nodejs - Express - Mongodb

## Ejecutar el proyecto en local

Clone el repositorio, muévase a el con `cd`

#### Para instalar los paquetes requeridos ejecute:

```bash
  npm install
```

Esto instalará dichos paquetes y todas sus dependencias en la carpeta node_modules/

#### Para ejecutar la aplicación:

```bash
  npm run start
```

Abra http://localhost:4000 para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones.
También verá cualquier error en la consola.

## Referencia de la API

#### Get Mascotas

```http
  GET /api/mascota
```

| Parameter        | Type                      | Description            |
| :--------------- | :------------------------ | :--------------------- |
| `identificacion` | `String`                  | **Requerido**.         |
| `nombre`         | `String`                  | **Requerido**.         |
| `raza`           | `String`                  | **Requerido**.         |
| `edad`           | `String`                  | **Requerido**.         |
| `condiciones`    | `String`                  | **Requerido**.         |
| `descripcion`    | `String`                  | **Requerido**.         |
| `IdAdoptante`    | `mongoose.Types.ObjectId` | **Solo si se adopta**. |

#### Get Encargados

```http
  GET /api/encargado
```

| Parameter  | Type     | Description    |
| :--------- | :------- | :------------- |
| `nombre`   | `String` | **Requerido**. |
| `cedula`   | `Number` | **Requerido**. |
| `telefono` | `Number` | **Requerido**. |

#### Get Adoptantes

```http
  GET /api/adoptantes
```

| Parameter   | Type     | Description    |
| :---------- | :------- | :------------- |
| `nombre`    | `String` | **Requerido**. |
| `cedula`    | `Number` | **Requerido**. |
| `direccion` | `String` | **Requerido**. |
| `telefono`  | `Number` | **Requerido**. |

#### Get Detalle de adopción

```http
  GET /api/detalleAdopcion
```

| Parameter         | Type                      | Description    |
| :---------------- | :------------------------ | :------------- |
| `fecha`           | `Date`                    | **Requerido**. |
| `cedulaAdoptante` | `Number`                  | **Requerido**. |
| `cedulaEncargado` | `Number`                  | **Requerido**. |
| `codigoMascota`   | `String`                  | **Requerido**. |
| `IdAdoptante`     | `mongoose.Types.ObjectId` | **Requerido**. |
| `IdEncargado`     | `mongoose.Types.ObjectId` | **Requerido**. |
| `IdMascota`       | `mongoose.Types.ObjectId` | **Requerido**. |
