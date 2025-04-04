# PEC1. Desarrollo de una web

## Introducción
Este archivo documenta todo el proceso de creación de mi página web correspondiente a la PEC1 de la asignatura de “Herramientas HTML y CSS”, del máster de “Desarrollo de Sitios y Aplicaciones Web” de la UOC.  
También servirá como justificación de las decisiones tomadas durante el desarrollo.

## Objetivo
El objetivo de esta PEC es diseñar, ejecutar y publicar un pequeño sitio web responsive siguiendo un flujo de trabajo de desarrollo frontend moderno, que diferencie entornos de desarrollo y producción.

## Documentación
### Generar plantilla con Parcel
El proceso de creación del sitio web empezó con la instalación de Parcel, ya que permite configurar la estructura básica del proyecto y gestionar dependencias de manera muy sencilla y sin necesidad de tener conocimientos avanzados de frontend o una estructura de proyecto demasiado compleja. A su vez, es fácilmente escalable en caso de que la aplicación necesite crecer.  
Para cualquier instalación de dependencias, he utilizado el gestor de paquetes npm.  
instalación:  
```
npm install --save-dev parcel
```  
Para estructurar mi proyecto de una forma intuitiva, he creado un directorio src/ en la raíz del proyecto, dentro del cual se encuentran todos los archivos relacionados con el frontend (css, javascript, imágenes y html), así como el punto de entrada de la aplicación, el archivo index.html. Estos archivos dentro de src, a su vez, están organizados en subdirectorios.  
En la raíz del proyecto, además del directorio src/, también se encuentran todos los archivos y directorios de configuración y de dependencias del proyecto (dist/, node_modules/, .gitignore, package.json y postcss.config.js).  
Estructura del proyecto:  
![Estructura del proyecto](/src/img/estructura-proyecto.png)  

### Definición de entornos de producción y desarrollo
Parcel permite diferenciar bien entre ambos entornos en función del comando que se ejecute.  
Configuré mi package.json de la siguiente manera:  
![scripts de package.json](/src/img/scripts.png)  
De esta manera, en desarrollo siempre he ejecutado el comando:  
```
npm run start
```  
Este comando permite servir la aplicación en http://localhost:1234, con la configuración “hot reload” activada, lo que me permite ir viendo en vivo los cambios que voy aplicando en la aplicación, útil en tiempo de desarrollo.  
Por otro lado, cuando la aplicación se pasa a producción, el comando que se utiliza es:  
```
npm run build
```  
Este comando compila y empaqueta el proyecto, minimiza archivos (.css, .js) y optimiza las imágenes, por lo que es útil en tiempo de producción.

### Soporte a navegadores antiguos mediante el uso de postprocesadores
Para aumentar la compatibilidad con navegadores antiguos, lo que he hecho ha sido instalar un postprocesador de css llamado “postCSS”, con una extensión llamada “Autoprefixer”.  
Instalación:  
```
npm install --save-dev postcss postcss-cli autoprefixer
```  
Estas herramientas procesan mis archivos css para añadirle algunos prefijos (por ejemplo -webkit-) en algunas líneas de código más modernas que permitan la compatibilidad con el mayor número de navegadores posible.  
Además de la instalación, he añadido en la raíz del proyecto el archivo de configuración postcss.config.js, que Parcel automáticamente entiende y aplica el procesamiento del css con el autoprefixer; eso lo hace bastante fácil y rápido de usar.  
Archivo postcss.config.js:  
![Archivo postcss.config.js](/src/img/postcss.png)  
Archivo package.json:  
![Comando para procesar css con postCSS](/src/img/build.png)  

### Dependencias externas
Además de las dependencias mencionadas previamente (parcel, postCSS y autoprefixer), siguiendo las directrices del enunciado decidí instalar una dependencia externa sencilla y fácil de usar, para animar los botones de la portada (archivo index.html). Esta dependencia se llama Animate.css.  
Instalación:  
```
npm install animate.css
```  
Para utilizar esta dependencia en mi proyecto, la importo en el archivo css en el que la quiera utilizar con el siguiente comando:  
```
@import "/node_modules/animate.css/animate.min.css";
```  
Por último, añado las clases adecuadas a los elementos HTML que quiero animar:  
![Clases que hay que añadir a los elementos HTML para que funcione la dependencia animate.css](/src/img/animatecss.png)  

### Semántica y accesibilidad
Para hacer la aplicación entendible para cualquier desarrollador, he tratado de utilizar las etiquetas HTML adecuadas en función del contenido y la estructura, haciendo uso de las etiquetas básicas (h1, h2, div, p, img) y de las etiquetas semánticas (header, footer, section, main).  
![Etiquetas HTML semánticas utilizadas](/src/img/semantica.png)  
Para los usuarios que entren a la web, la he tratado de hacer lo más intuitiva y accesible posible. Para ello, he usado el atributo descriptivo alt para todas las imágenes que he utilizado, haciendo la aplicación legible para los lectores de sitios web. Además de esto, y como aspectos más visuales, he creado una web responsive que se adapta a cualquier tipo y tamaño de dispositivo moderno (ordenadores, tablets y móviles), cambiando el contenido en función del tamaño de la pantalla utilizando media queries. También he utilizado una paleta de colores, caracterizada por un color rojo oscuro y un color blanco, con suficiente contraste entre ellos como para que el contenido sea fácilmente legible. Por último, he creado botones en todas las páginas para que la navegación entre ellas sea intuitiva y rápida, sin necesidad de clickar constantemente en la flecha de “ir atrás” del navegador.  
![Uso de media queries para ajustar el contenido de la pantalla por debajo de 820px](/src/img/media-queries.png)  

### Repositorio GitHub
Una vez terminé el proyecto en mi máquina local, he creado un repositorio remoto en GitHub llamado “cocina-del-mundo” y he hecho un push de mi única rama (la main) a este repositorio. Lo he configurado como público para que sea de fácil acceso y para facilitar el proceso de publicación en Internet.  
Link al repositorio: https://github.com/CjuanRcris7/cocina-del-mundo.git

### Publicación en Internet
Después de tener el proyecto en un repositorio de GitHub y añadir el README.md con esta misma información (documentación del proceso), he publicado la web en Internet utilizando la plataforma Netlify, ya que es la propuesta realizada por el profesorado y me parecía buena opción, gratuita y rápida.  
Link a Netlify: https://www.netlify.com/

## Link a la página web
Link al proyecto final: [Ver web en Internet](https://cocina-del-mundo.netlify.app/)