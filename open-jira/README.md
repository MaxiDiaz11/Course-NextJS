## Next.js OpenJira APP

Para correr localmente, se necesita la BD

```
docker-compose up -d
```

- El -d, significa _detached_

MongoDB URL Local:
mongodb://localhost:27017/entriesdb

##Llenar la base de datos con información de pruebas
Llamar a:

```
http://localhost:27017/api/seed
```
