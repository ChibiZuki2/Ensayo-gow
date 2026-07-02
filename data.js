/* ============================================================
   data.js — LadyGowi Fanart Archive
   ✏️ ESTE ARCHIVO ES GESTIONADO POR EL PANEL ADMIN
   No lo reemplaces por completo — solo el admin lo edita.
   Si necesitas cambiar algo manual, edita solo las líneas
   correspondientes usando github.dev
   ============================================================ */

/* ============================
   ⚙️ CONFIGURACIÓN GENERAL
   ============================ */
const TWITCH_CHANNEL = "ladygowi";   // nombre de usuario en Twitch
const BDAY_MONTH     = 7;            // mes del cumpleaños (7 = Julio)
const BDAY_DAY       = 9;            // día del cumpleaños
const CHIBI_EGG      = "✨ Shhh… sólo tú sabes esto: Eres mi persona favorita!! 🤫💜✨";

/* ============================
   🏷️ CATEGORÍAS DE FANARTS
   ============================ */
const CATEGORIES = ["fanart","emotes","memes"];

/* ============================
   📖 LORE
   ============================ */
const LORE = {
  quien: "LadyGowi es una vtuber de habla hispana, conocida por su personalidad tierna y sus cuernos de oveja. Su comunidad, los \"Gowitos\", la acompañan en cada stream con mucho cariño.",
  metas: [
    { ico:"🎯", txt:"Próximamente..." },
    { ico:"✨", txt:"Próximamente..." },
    { ico:"🐑", txt:"Próximamente..." },
  ]
};

/* ============================
   🎵 CANCIONES
   ============================ */
const CANCIONES = [
  { titulo:"LadyGowi — música 1", youtubeId:"QLHMhVonF-s" },
];

/* ============================
   🐑 SONIDOS
   tipo: "chibi" = suena al tocar la chibi (random)
         "campana" = suena al tocar el título/campana (random)
   peso: número — más alto = sale más seguido
   ============================ */
const SONIDOS = [
  { tipo:"campana", nombre:"Campanita1", archivo:"sonidos/1782982840916-campanita1.mp3", peso:1 },
  { tipo:"chibi", nombre:"Oveja seria", archivo:"sonidos/1782982822773-ovejita-seria.mp3", peso:1 },
  { tipo:"chibi", nombre:"Oveja chillona", archivo:"sonidos/1782982809512-ovejita-chillona.mp3", peso:1 },
  { tipo:"chibi", nombre:"Oveja chikita", archivo:"sonidos/1782982727634-ovejita-chikita.mp3", peso:1 },
];

/* ============================
   💬 FRASES DE LA CHIBI
   peso: número — más alto = sale más seguido
   ============================ */
const CHIBI_FRASES = [
  { texto:"¡Hola! 💜", peso:1 },
  { texto:"¡Gracias por venir a verme! 🌸", peso:1 },
  { texto:"¿Qué dice una cereza cuando se ve al espejo? ¿Seré esa? 🍒 ¡¡JAJA!!", peso:1 },
  { texto:"Shhh… no hagas ruido, mis corderitos duermen 🐑💤", peso:1 },
  { texto:"¡Espero verte en mi stream! 🎀", peso:1 },
  { texto:"🎈 wekito", peso:1 },
];

/* ============================
   🖼️ IMÁGENES / FANARTS
   ============================ */
const IMAGENES = [
      { src:"imagenes/1782983719068-proyecto-gowi-1.webp", titulo:"Uno de mis primeros fanarts", artista:"Chibi", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"Fue uno de los primeros fan art que me hicieron", destacado:true },
  { src:"imagenes/ejemplo01.jpg", titulo:"Ejemplo fanart 1",  artista:"@artista",     categoria:"fanart", fecha:"2026-05-01", placeholder:"🎨", nota:"", destacado:false },
  { src:"imagenes/ejemplo02.jpg", titulo:"Ejemplo emote",     artista:"@emoteartist", categoria:"emotes", fecha:"2026-05-10", placeholder:"✨", nota:"", destacado:false },
  { src:"imagenes/ejemplo03.jpg", titulo:"Ejemplo meme",      artista:"@mememaster",  categoria:"memes",  fecha:"2026-05-20", placeholder:"😂", nota:"", destacado:false },
];

/* ============================
   🎮 ICONOS DE OVEJA (calificaciones de juegos)
   ============================ */
const OVEJA_IMGS = [
  "imagenes/ovejas/oveja1.png",
  "imagenes/ovejas/oveja2.png",
  "imagenes/ovejas/oveja3.png",
  "imagenes/ovejas/oveja4.png",
];

/* ============================
   🎮 JUEGOS
   nota: 1-5 | rec: "si" / "no" / "tal"
   imagen: ruta de la portada (opcional)
   ============================ */
const JUEGOS = [
  /* ejemplo — borra esta línea y agrega tus juegos:
  { titulo:"Nombre del juego", nota:4, rec:"si", nota_texto:"Muy divertido 💜", imagen:"imagenes/juegos/juego.webp" },
  */
];
