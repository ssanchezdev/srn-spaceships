# SRN Spaceships

Solución técnica desacoplada para consultar un catálogo de naves. Proyecto desarrollado con una arquitectura limpia, backend dockerizado y aplicación móvil en React Native con Expo.

## 📺 Demo del Proyecto

**[https://www.youtube.com/shorts/h7zcqdi01Q4]**

---

## 🚀 Instrucciones de Ejecución

### 1. Backend (API)

El servicio corre en un contenedor Docker sobre el puerto 3000.

```bash
cd backend
# Levantar el servicio
docker-compose up --build

Versión de node usada: v24.12.0
```

## 2. Mobile App

La aplicación está construida con React Native + Expo.

Dentro del proyecto debemos ir a la carpeta "mobile"

cd mobile

# Instalar dependencias

npm install

# Ejecutar app

npx expo start -c

## 3. Preguntas y Respuetas

1- EAS Build: Describe los pasos y configuración necesaria en eas.json para generar .apk e .ipa de producción.

## Para generar un APK/IPA listo para utilizarse en tiendas vamos a usar "EAS" (Expo Application Services).

## 1.- Instalar la CLI -> npm install -g eas-cli

## 2.- Auntenticación -> eas login

## 3.- Configuración Inicial -> eas build:configure

## 4.- En el archivo "eas.json", definimos el perfil de producción

"
{
"build": {
"production": {
"android": { "buildType": "apk" },
"ios": { "enterpriseProvisioning": "adhoc" }
}
}
}
"

## 5.- Ejecutamos build -> eas build --profile production --platform android

2- Offline First: Si la app debiera funcionar sin internet, ¿qué estrategia
de BD local usarías (SQLite, Realm, etc.) y por qué?

## Para garantizar que la aplicación funcione sin internet, implementamos SQLite por vía de expo-sqlite

## ¿Porque?

## A diferencia de AsyncStorage que almacena valores de tamaño simples y límitados, con SQLite que es una BD relacional completa, nos permite crear índices para búsquedas y filtrados eficientes y nos deja manejar grandes volúmenes de datos de forma comoda sin obstaculizar otros hilos de procesos de JavaScript.

3- Apple Guideline 4.2: Si Apple rechaza la app por "Minimum
Functionality", ¿qué solución técnica o de producto propondrías?

## En caso de que Apple directamente rechace la app por considerarla de "funcionalidad mínima", mi propuesta técnica y de producto como tal es:

## 1.- Persistencia Local -> Permitir al usuario guardar naves y añadir notas personales, guardándolas en la BD local.

## 2.- Comparador de Naves -> Implementar una neuva pantalla que permita seleccionar 2 naves y comparar sus estadísticas visualmente.

## 3.- Widgets Nativos -> Desarrollar un Widget para IOS que muestre una "Nave del día" en la pantala de inicio, aumentando la retención y el valor de la app fuera de la ejecución principal.
