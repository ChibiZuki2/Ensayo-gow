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
  { tipo:"chibi",   nombre:"Oveja pequeña", archivo:"sonidos/small-sheep.mp3", peso:1 },
  { tipo:"chibi",   nombre:"Oveja grande",  archivo:"sonidos/monsheep.mp3",    peso:1 },
  { tipo:"campana", nombre:"Campanas",      archivo:"sonidos/sheep-bells.mp3", peso:1 },
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
      { src:"imagenes/1782963004665-cc6f65be-a106-420c-a83f-e5a0a5d351fa.webp", titulo:"Sin palabras dajdjd", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"Drelfi, entrapta y yo", destacado:true },
      { src:"imagenes/1782962956126-1c67dd61-4a0f-4c1f-b117-6a99bb2b8172.webp", titulo:"San gowi", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"prueba", destacado:false },
      { src:"imagenes/1782962928224-ba7f692b-b4b5-429b-b839-efafa3052f1f-1-.webp", titulo:"Vitral coso", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"probando", destacado:false },
      { src:"imagenes/1782962583054-ae858789-ad9c-442d-96a4-5479403fcf2a.webp", titulo:"Probando 1", artista:"coso", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"", destacado:true },
      { src:"imagenes/1782962260537-proyecto-gowi-1.webp", titulo:"Uno de mis primeros fanarts", artista:"Chibi", categoria:"fanart", fecha:"2026-07-02", placeholder:"🎨", nota:"Uno de mis primeros fanarts a mi", destacado:false },
];

/* ============================
   🎮 ICONOS DE OVEJA (calificaciones de juegos)
   ============================ */
const OVEJA_IMGS = [
  "imagenes/ovejas/1782963075897-oveja2.png",
  "imagenes/ovejas/1782963062073-oveja1.png",
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
