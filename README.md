# AccessibleCarousel

Carrusel accesible de acuerdo con las pautas WCAG 2.0 y 2.1.

## Ejemplo en funcionamiento
Puedes                     encontrar un ejemplo funcional así como un tutorial en el blog del autor Javier Rodríguez (https://wwww.tecnologiaaccesible.com)
                   
### Pre-requisitos 📋

Este carrusel hace uso de los frameworks JQuery y Bootstrap, por lo que es necesario incluir las dependencias necesarias antes de utilizar el componente:
```
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

<script src="libs/jquery.min.js"></script>
<script src="libs/bootstrap.bundle.min.js"></script>
<script src="js/carousel.js"></script>

```

### Instalación 🔧

Una vez se han incluido los estilos, librerías y el script, el código html deberá respetar la siguiente estructura:

```
<div role="contentinfo" aria-label="Carrusel Accesible">
<div id="carouselExampleIndicators" class="carousel slide">
<div class="screen-reader-text" role="heading" aria-level="2">Título del Carrusel</div>
<a id="skipCarousel" class="screen-reader-text skip-link" href="#pauseButton" title="Saltar carrusel">Saltar carrusel</a>
<div class="carousel-inner">
<div class="carousel-item active" role="region" aria-label="Diapositiva 1">
<div class="carousel-caption d-none d-md-block">
<h3>Diapositiva 1</h3>
</div>
 <!-- caption --><br>
<!-- Contenido de la Diapositiva 1 -->
</div>
 <!-- item -->
<div class="carousel-item" role="region" aria-label="Diapositiva 2">
<div class="carousel-caption d-none d-md-block">
<h3>Diapositiva 2</h3>
</div>
 <!-- caption --><br>
<!-- Contenido de la Diapositiva 2 -->    </div>
 <!-- item -->
<div class="carousel-item" role="region" aria-label="Diapositiva 3">
<div class="carousel-caption d-none d-md-block">
<h3>Diapositiva 3</h3>
</div>
 <!-- caption --><br>
<!-- Contenido de la Diapositiva 3 -->  </div>
 <!-- item -->
  </div>
 <!-- inner -->
<div role="navigation" aria-label="Controles del Carrusel">
<ol class="carousel-indicators">
<li class="active">
<a href="#" data-target="#carouselExampleIndicators" data-slide-to="0" aria-label="Diapositiva 1" title="" data-toggle="tooltip" data-placement="bottom" aria-current="true" data-original-title="Diapositiva 1"><i aria-hidden="true"></i></a>
</li>
<li class=""><a href="#" data-target="#carouselExampleIndicators" data-slide-to="1" aria-label="Diapositiva 2" title="" data-toggle="tooltip" data-placement="bottom" aria-current="false" data-original-title="Diapositiva 2"><i aria-hidden="true"></i></a></li>
<li class=""><a href="#" data-target="#carouselExampleIndicators" data-slide-to="2" aria-label="Diapositiva 3" title="" data-toggle="tooltip" data-placement="bottom" aria-current="false" data-original-title="Diapositiva 3"><i aria-hidden="true"></i></a></li>
</ol>
  <a id="prev_slide" class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" aria-label="Anterior" title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Anterior"><br>
    <i class="fas fa-arrow-left" aria-hidden="true"></i><br>
      </a><br>
  <a id="next_slide" class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" aria-label="Siguiente" title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Siguiente"><br>
    <i class="fas fa-arrow-right" aria-hidden="true"></i><br>
      </a><br>
  <a class="btn carousel-control-play" href="Javascript:void(0)" role="button" id="pauseButton" aria-label="Pausar" title="Pausar" data-toggle="tooltip" data-placement="bottom" data-original-title="Pausar"><i id="pauseIcon" class="fas fa-pause" aria-hidden="true"></i></a>
</div>
 <!-- navigation -->
</div>
 <!-- carousel -->
<div id="current_slide" class="screen-reader-text" aria-live="assertive"></div>
</div>
```

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/tecnologiaaccesible/AccessibleAccordionMegaMenu) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Web del Autor

Puedes encontrar mucho más de cómo utilizar este proyecto en mi  blog(https://www.tecnologiaaccesible.com/carrusel-accesible/)

## Autor ✒️

* **Javier Rodríguez** - *Desarrollo y tutorial completos* - [tecnologiaaccesible](https://github.com/tecnologiaaccesible)

## Licencia 📄

Este proyecto está bajo la Licencia (GNU GENERAL PUBLIC LICENSE) - mira el archivo LICENSE para detalles

