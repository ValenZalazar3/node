# Node con TypeScript - TS-Node-dev (preferido)

1. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node-dev rimraf
```
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
4. Levantar docker una vez hecho el archivo "docker-compose.yml"
```
docker compose up -d
```
5. Instalar prisma
```
 npm install prisma --save-dev   //  npx prisma init --datasource-provider postgres
```