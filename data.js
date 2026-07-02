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
      { src:"imagenes/1782983815322-1c67dd61-4a0f-4c1f-b117-6a99bb2b8172.webp", titulo:"san gowi", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"aaaa", destacado:true },
      { src:"imagenes/1782983784981-ae858789-ad9c-442d-96a4-5479403fcf2a.webp", titulo:"coso", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"no se que poner", destacado:false },
      { src:"imagenes/1782983755963-ba7f692b-b4b5-429b-b839-efafa3052f1f-1-.webp", titulo:"Vitral coso", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"con la yepita", destacado:true },
      { src:"imagenes/1782983719068-proyecto-gowi-1.webp", titulo:"Uno de mis primeros fanarts", artista:"Chibi", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"Fue uno de los primeros fan art que me hicieron", destacado:true },
];

/* ============================
   🎮 ICONOS DE OVEJA (calificaciones de juegos)
   ============================ */
const OVEJA_IMGS = [
  "imagenes/ovejas/oveja4.png",
];

/* ============================
   🎮 JUEGOS
   nota: 1-5 | rec: "si" / "no" / "tal"
   imagen: ruta de la portada (opcional)
   ============================ */
const JUEGOS = [
  { titulo:"Minecraft", nota:5, rec:"si", nota_texto:"Juegazo", imagen:"imagenes/juegos/1782983861358-homepage-discover-our-games-mc-vanilla-keyart-864x864.jpg" },
  /* ejemplo — borra esta línea y agrega tus juegos:
  { titulo:"Nombre del juego", nota:4, rec:"si", nota_texto:"Muy divertido 💜", imagen:"imagenes/juegos/juego.webp" },
  */
];
