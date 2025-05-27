## Introducción
Este archivo documenta todo el proceso de creación de mi página web correspondiente a la PEC1 de la asignatura de “Herramientas HTML y CSS”, del máster de “Desarrollo de Sitios y Aplicaciones Web” de la UOC.  
También servirá como justificación de las decisiones tomadas durante el desarrollo.

## Objetivo
El objetivo de esta PEC es diseñar, ejecutar y publicar un pequeño sitio web responsive siguiendo un flujo de trabajo de desarrollo frontend moderno, que diferencie entornos de desarrollo y producción.

## Repositorio GitHub
Una vez terminé el proyecto en mi máquina local, he creado un repositorio remoto en GitHub llamado “cocina-del-mundo” y he hecho un push de mi única rama (la main) a este repositorio. Lo he configurado como público para que sea de fácil acceso y para facilitar el proceso de publicación en Internet.  
Link al repositorio: https://github.com/CjuanRcris7/cocina-del-mundo.git

## Publicación en Internet
Después de tener el proyecto en un repositorio de GitHub y añadir el README.md con esta misma información (documentación del proceso), he publicado la web en Internet utilizando la plataforma Netlify, ya que es la propuesta realizada por el profesorado y me parecía buena opción, gratuita y rápida.  
Link a Netlify: https://www.netlify.com/

## Link a la página web
Link al proyecto final: [Ver web en Internet](https://cocina-del-mundo.netlify.app/)

## Documentación
# PEC1. Desarrollo de una web
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

# PEC2. Web y recursos multimedia
### Formatos de imagen
Todos los formatos de imagen que he utilizado durante el desarrollo son .jpg y .png.  
Para intentar optimizarlos, me descargué (de forma global, no sólo en el proyecto) la herramienta imagemin-cli mediante el comando:  
```
npm install -g imagemin-cli
```  
Después, utilicé imagemin mediante el comando:  
```
imagemin src/img/* --out-dir=src/img-min
```   
Sin embargo, al comparar los tamaños de las imágenes, realmente el cambio era bastante minúsculo, de apenas unos kilobytes.  
A continuación, adjunto imágenes comparativas de las imágenes originales y de las imágenes optimizadas:  
**IMÁGENES ORIGINALES:**    
![Detalles de las imágenes originales](/src/img/src-img.png)  
**IMÁGENES OPTIMIZADAS:**  
![Detalles de las imágenes optimizadas](/src/img/src-img-min.png)  
A pesar de que sí que se pueden observar algunos cambios mínimos en el tamaño de algunas imágenes, el tamaño global es el mismo: 26M, y el formato de las mismas también (.png y .jpg).  
Por ello, decidí mantener la carpeta generada al optimizarlas (directorio /img-min), pero seguir utilizando las imágenes originales (directorio /img).  
Después utilicé el comando:  
```
npm run build
```   
Pude comprobar que de esta manera se optimizan también las imágenes y otros archivos pero, al igual que antes, de una manera muy pequeña.  
![Detalles tras usar el comando build](/src/img/img_build.png)   
Como conclusión y propuesta de mejora de este apartado, creo que puede ser interesante intentar una optimización diferente, cambiando el formato de las imágenes a otro más moderno como WebP, AVIF o SVG.

### Técnicas responsive
Desde la PEC1, intenté que la web y las imágenes en todo momento fueran responsive, así que gran parte del trabajo de este apartado ha sido conocer diferentes técnicas y aplicarlas a las imágenes de la web.  
Durante los commits, he ido mencionando qué técnica usaba y en qué documentos para que se pudiera seguir el proceso que he seguido de forma sencilla.  
![Commits del proyecto relacionados con la PEC2](/src/img/responsive.png)  
En resumen, he intentado combinar la técnica de dirección de arte y la técnica de *resolution switching* por tamaño en todas las imágenes de:
- Página de recetas
- Página de recursos
- Páginas de detalle de cada receta  

El motivo de esta combinación de técnicas me ha permitido mostrar imágenes diferentes en función del tamaño del dispositivo en el que se visualiza la web (en píxeles). Esto me resulta especialmente útil porque puedes decidir la imagen que se visualizará en función de la que más se adapta al tipo de dispositivo por su forma o tamaño. Por ejemplo, he elegido fotos verticales para mostrar en dispositivos móviles y fotos que quería más apaisadas en *tablets* y ordenadores. Estas fotos eran diferentes, pero mostraban la misma idea (tipo de receta o tipo de recurso).  
Para utilizar correctamente estas técnicas, he pasado de usar solamente la etiqueta **img** por una etiqueta **picture**, en la que se puede especificar los **source** que se quieran en función de diferentes condiciones, en mi caso el tamaño. Además, incluye la etiqueta **img** al final para asegurarse de que el navegador pueda entender el contenido a renderizar o, en caso de que no soporte esta técnica, al menos se pueda mostrar una imagen.  
![Ejemplo de uso de las técnicas de dirección de arte y resolution switching por tamaño combinadas](/src/img/direccion-de-arte.png)  

Por otro lado, la tercera técnica sugerida en el enunciado, *resolution switching* por densidad de píxeles, la he aplicado solamente en el index.html, porque es mi portada, en la que hay una imagen que ocupa toda la pantalla y puede verse más afectado el cambio en función del dispositivo en el que se visualice. Para ello, he cambiado la etiqueta html **img** por una de **div** y he añadido en el documento **index.css** una directriz para que, en función de la densidad de píxeles del dispositivo, la imagen sea una u otra. En realidad, son la misma imagen pero previamente he preparado una para que tenga menos píxeles que la original (que tiene una resolución de 4458x2972), ya que no es necesaria tanta resolución en pantallas que no lo permiten.  
![Directrices css para aplicar la técnica de resolution switching por densidad de píxeles](/src/img/densidad-pixeles.png)

### Animaciones CSS
Además de las animaciones implementadas en la PEC1 (botones de la portada y animación de cada recurso y/o receta al pasar el cursor sobre ellas), en esta PEC2 he implementado las siguientes:
- Animación de entrada en los títulos de todas las páginas (excepto index.html).
- Animación en las página de receta para que al poner el cursor sobre una de ellas la imagen pase de verse recortada con clip-path a verse completa.

Ambas animaciones son sutiles y tienen el objetivo de aportar dinamismo y un toque moderno a la web, pero no son grandes cambios funcionales ni estructurales.  
**ANIMACIÓN TÍTULOS**  
![Animación aplicada a los títulos de la web con keyframes](/src/img/animacion-titulos.png)  
**ANIMACIÓN RECETAS**  
![Animación aplicada a las recetas con clip-path y transitio](/src/img/animacion-recetas.png)

### Uso de clip-path
He utilizado la técnica clip-path en 3 situaciones diferentes, basándome en las sugerencias del enunciado y de lo que pensaba que iba a resultar atractivo para la página web:
- En primer lugar, he mostrado las imágenes de cada receta y recurso (en la página recetas.html y recursos.html, respectivamente) de forma que no se visualicen como un rectángulo perfecto (como estaban antes), sino como un polígono irregular que da un acabado moderno a la imagen. Además, he añadido una animación para que al poner el cursor encima se agranda el polígono y sí que se muestre un rectángulo perfecto.  
**CÓDIGO**  
![Técnica clip-path a imágenes. Código](/src/img/clip-path-img.png)  
**RESULTADO**  
![Técnica clip-path a imágenes. Resultado](/src/img/clip-path-img-visual.png)   
- En segundo lugar, he aplicado un recorte en forma de circunferencia a las etiquetas **iframe** de la página de detalle de cada receta, para que la miniatura de los videos se vea más estilizada y centrada en la página.  
**CÓDIGO**  
![Técnica clip-path a iframe. Código](/src/img/clip-path-iframe.png)  
**RESULTADO**  
![Técnica clip-path a iframe. Resultado](/src/img/clip-path-iframe-visual.png)  
- Por último, he aplicado una forma de rombo a la imagen de la portada. Antes estaba ocupada todo el espacio y ahora se proyecta en forma de un rombo de tamaño grande (solo se ven 2 de sus 4 vértices). Además, he cambiado el color de fondo al color principal de la web (##4c2b3c), para que las zonas que no cubre la imagen vayan acordes con el resto de la página. Este cambio, al igual que el primero, tiene como objetivo hacer la web más moderna e inmersiva, ya que parece que estás entrando literalmente al contenido al formarse una especie de ventana gracias a la técnica clip-path.  
**CÓDIGO**  
![Técnica clip-path a portada. Código](/src/img/clip-path-portada.png)  
**RESULTADO**  
![Técnica clip-path a portada. Resultado](/src/img/clip-path-portada-visual.png)

### Semántica y accesibilidad
Para comprobar semántica y la accesibilidad de mi página web, a parte del cuidado manual durante el desarrollo, he utilizado el inspector de Firefox para corroborar que la aplicación es accesible, mediante la opción *accessibility* del inspector del navegador, y pasando por todas las páginas. La única indicación que he tenido que solucionar es que a los **iframe** les faltaba una etiqueta **title** para explicar de qué trataba el video.  
Los requisitos mínimos alcanzados por el proyecto son:
- Contraste de colores suficiente.
- Etiquetas de texto alternativo al contenido audiovisual (videos e imágenes).
- Uso adecuado de etiquetas HTML.
- Navegación mediante teclado sin problemas.  
![Pantallazo del inspector de accesibilidad de Firefox](/src/img/accesibilidad-firefox.png)  

# PEC3. Rendimiento web
### Análisis del tiempo de carga  
Los análisis los he realizado sobre la página de recetas (recetas.html). Esto es porque esta página tiene un total de 13 recursos que cargar entre los cuales hay 5 imágenes, por lo que los cambios que realice van a ser más evidentes en el rendimiento.  
Por otro lado, la URL de la página corresponde a su versión local, ya que he hecho todos los cambios en desarrollo antes de pasarlos a producción.  
Después de realizar todos los cambios y subirlos a producción, he añadido una tabla con la información para que se pueda comparar el rendimiento también con su versión publicada en Internet.

**PRIMER ANÁLISIS**  
| Métrica               | Valor                                    |
|-----------------------|------------------------------------------|
| Título de la página   | Recetas tradicionales de Madrid          |
| URL                   | http://localhost:1234/html/recetas.html  |
| Tiempo de carga       | 62.01 s                                  |
| Peso total            | 5.80 MB                                  |
| Peso transferido      | 5.80 MB                                  |
| Nº de recursos        | 13                                       |

**SEGUNDO ANÁLISIS (todos los recursos)**  
| Métrica               | Valor                                    |
|-----------------------|------------------------------------------|
| Título de la página   | Recetas tradicionales de Madrid          |
| URL                   | http://localhost:1234/html/recetas.html  |
| Tiempo de carga       | 26.25 s                                  |
| Peso total            | 5.80 MB                                  |
| Peso transferido      | 5.80 MB                                  |
| Nº de recursos        | 13                                       |

**SEGUNDO ANÁLISIS (solo recursos visibles)**  
| Métrica               | Valor                                    |
|-----------------------|------------------------------------------|
| Título de la página   | Recetas tradicionales de Madrid          |
| URL                   | http://localhost:1234/html/recetas.html  |
| Tiempo de carga       | 2.60 s                                   |
| Peso total            | 2.49 MB                                  |
| Peso transferido      | 2.49 MB                                  |
| Nº de recursos        | 10                                       |

### Primeros cambios  

### Informe de mejoras  

### Preguntas  
- **¿Qué cambios detectas en las herramientas para desarrolladores al aplicar lazy loading a las imágenes de tu web? ¿Cómo crees que afecta al rendimiento de tu página?**
    - respuesta
- **¿Qué sucede al aplicar carga asíncrona a los scripts de tu página? ¿Qué problemas crees que podrían surgir si cargas el JavaScript de forma asíncrona? Ten en cuenta los diferentes métodos de carga asíncrona para responder esta pregunta.**
    - respuesta
- **No hemos hecho carga asíncrona de estilos. ¿Crees que se podría hacer? ¿Qué problemas podríamos tener? Razona tu respuesta.**
    - respuesta