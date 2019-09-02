var trabajos = [{

//Sofia y Caco//

  figure: "media/mitomano.jpg",
  alt: "Descripción de la imagen",
  title: "Mitómano",
  about: "Juego de cartas que permite el vínculo alumni-universidad <br><br>SOFÍA y CACO <br> Taller 3, 2018",
  url:"https://www.instagram.com/p/B1ydKZul-YA/"


}, {

  figure: "media/mako.png",
  alt: "Descripción de la imagen",
  title: "MAKO",
  about: "Traje de agua para personas con paraplejia que les permite nadar con rolido, facilitando asi el nado crol <br><br> SOFÍA y CACO <br>Taller 4, 2018",
  url:"https://www.youtube.com/watch?v=sbFw-58sWZM"



  }, {

    figure: "media/banca.jpg",
    alt: "Descripción de la imagen",
    title: "Banca ROZ",
    about: "Banca a partir de terciado 3mm y amarracables <br><br> SOFÍA y CACO <br> Estructuras y Materiales, 2019",
    url:"https://www.instagram.com/p/B1gpswKAyAK/"


}, {

  figure: "media/puente.jpg",
  alt: "Descripción de la imagen",
  title: "Proyecto de iluminaciòn Puente Lo Saldes",
  about: "Proyecto de iluminacion para puente Lo Saldes en vitacura <br><br> SOFÍA y CACO <br> OPR Iluminacón, 2019",
  url:"https://www.instagram.com/p/B143acflKBe/"

}, {

  figure: "media/zoom.png",
  alt: "Descripción de la imagen",
  title: "Dispositivo para Lemures",
  about: "Dispositivo de enriquecimiento ambiental para lemures del ZOOMET <br> <br> SOFÍA <br>Taller 2, 2017",
  url:"https://www.instagram.com/p/B142fvkFnay/"

}, {
  figure: "media/rum.png",
  alt: "Descripción de la imagen",
  title: "RUM",
  about: "Juguete interactivo a partir de plastico reciclado <br><br> SOFÍA <br> Taller 5, 2019",
  url:"https://www.instagram.com/p/B141nB1lo23/"


}, {
  figure: "media/boquilla.jpg",
  alt: "Descripción de la imagen",
  title: "Boquilla VirutexIlko",
  about: "Boquilla acoplable para consumo de alimentos liquidos en bolsa <br><br> CACO <br> Taller 5, 2019",
  url:"https://www.instagram.com/p/B1gws_3ABW_/"



  }, {
  figure: "media/cartera.jpg",
  alt: "Descripción de la imagen",
  title: "Cartera para arte en hilo",
  about: "Trabajo en conjunto con artesana local arte-en-hilo <br><br> CACO <br> Taller 5, 2019",
  url:"https://www.instagram.com/p/B1g0SB5AuQ4/"

}, {


  figure: "media/arruca.png",
  alt: "Descripción de la imagen",
  title: "Arruca",
  about: "Cuna para albergues de emergencia a partir de textil PVC reciclado <br><br> SOFÍA <br>Taller 4, 2018",
  url:"https://www.instagram.com/p/B1ydKZul-YA/"

}, {

  figure: "media/juego.jpg",
  alt: "Descripción de la imagen",
  title: "Juego Parque Metropolitano",
  about: "Juego para plaza a las faldas del parque metropolitano <br><br> CACO <br> Lab. Modelos y Prototipos, 2017",
  url:"https://www.instagram.com/p/B1gzP_5gR1d/"


}, {
  figure: "media/virutex.png",
  alt: "Descripción de la imagen",
  title: "Parches quitamanchas VirutexIlko",
  about: "Parches adhesivos quitamancha para ropa de oficina <br><br> SOFÍA <br>Taller 5, 2019",
  url:"https://www.instagram.com/p/B1ydKZul-YA/"

}, {
  figure: "media/fuente.jpg",
  alt: "Descripción de la imagen",
  title: "Fuente de agua zoomet",
  about: "Dispositivo de enriquecimiento ambiental para camaleón velado <br><br> CACO <br> Taller 2, 2017",
  url:"https://www.instagram.com/p/B1g0vU2AhYG/"


}, {
  figure: "media/mural.png",
  alt: "Descripción de la imagen",
  title: "Mural Cafeteria Grannatto",
  about: "Trabajo de ilustración en tizas para un muro interior <br><br> SOFÍA <br>Trabajo Personal, 2018",
  url:"https://www.instagram.com/p/BlrFR1ugVHR/"


}, {


  figure: "media/borrador.png",
  alt: "Descripción de la imagen",
  title: "El Borrador",
  about: "Kit para desarrollo metodológico de una investigación <br><br> SOFÍA <br> Taller 4, 2018",
  url:"https://www.instagram.com/p/B143xuRFIXx/"


}, {

      figure: "media/sofialike.png",
      alt: "Descripción de la imagen",
      title: "Pintura en vivo",
      about: "Show de arte en vivo para las fiestas LIKE! <br><br> SOFÍA <br> Centroparque, 2019",
      url:"https://www.instagram.com/p/BwsV8WNF27p/"


}, {


    figure: "media/exhibidor.jpg",
    alt: "Descripción de la imagen",
    title: "Exhibidor Carmen",
    about: "Exhibidor para botellas de vino <br><br> CACO <br> Taller 6, 2019",
    url:"https://www.instagram.com/p/B1gp__xgnde/"



}, {
    figure: "media/estaño.jpg",
    alt: "Descripción de la imagen",
    title: "Escultura de Estaño",
    about: "Escultura modular a partir de estaño <br><br> CACO <br> Estructuras y Materiales, 2019",
    url:"https://www.instagram.com/p/B1ydKZul-YA/"



}, {

    figure: "media/parlante.jpg",
    alt: "Descripción de la imagen",
    title: "Parlante",
    about: "Parlante a partir de corte CNC e impresión 3D <br><br> CACO <br> OPR CADCAM, 2019",
    url:"https://www.instagram.com/p/B1gxPOng_pR/"






}];

// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href="' + trabajos[i].url + '"> ¿Quieres ver más? </a></p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
