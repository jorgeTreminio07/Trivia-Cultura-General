const questions = [
    {
        question: "\u00bfCu\u00E1l es la capital de Australia?",
        choices: ["Sydney", "Melbourne", "Canberra"],
        correctAnswer: "Canberra",
        additionalInfo: "Canberra es la capital de Australia desde 1908, ubicada entre las dos ciudades m\u00E1s grandes, Sydney y Melbourne."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se descubri\u00F3 la penicilina?",
        choices: ["1921", "1928", "1935"],
        correctAnswer: "1928",
        additionalInfo: "La penicilina fue descubierta por Alexander Fleming en 1928, revolucionando la medicina al introducir el primer antibi\u00F3tico."
    },
    {
        question: "\u00bfCu\u00E1l es el metal m\u00E1s abundante en la corteza terrestre?",
        choices: ["Hierro", "Aluminio", "Cobre"],
        correctAnswer: "Aluminio",
        additionalInfo: "El aluminio es el metal m\u00E1s abundante en la corteza terrestre, aunque no se encuentra en forma pura debido a su alta reactividad."
    },
    {
        question: "\u00bfQui\u00E9n escribi\u00F3 'Cien a\u00f1os de soledad'?",
        choices: ["Mario Vargas Llosa", "Gabriel Garc\u00EDa M\u00E1rquez", "Isabel Allende"],
        correctAnswer: "Gabriel Garc\u00EDa M\u00E1rquez",
        additionalInfo: "'Cien a\u00f1os de soledad' es una obra maestra del realismo m\u00E1gico escrita por Gabriel Garc\u00EDa M\u00E1rquez, ganador del Premio Nobel de Literatura en 1982."
    },
    {
        question: "\u00bfCu\u00E1l es el oc\u00E9ano m\u00E1s grande del mundo?",
        choices: ["Atl\u00E1ntico", "\u00EDndico", "Pac\u00EDfico"],
        correctAnswer: "Pac\u00EDfico",
        additionalInfo: "El oc\u00E9ano Pac\u00EDfico es el m\u00E1s grande y profundo del mundo, cubriendo m\u00E1s del 60% de la superficie total de los oc\u00E9anos del planeta."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se proclam\u00F3 la independencia de M\u00E9xico?",
        choices: ["1810", "1821", "1836"],
        correctAnswer: "1821",
        additionalInfo: "La independencia de M\u00E9xico fue proclamada el 27 de septiembre de 1821, marcando el fin del dominio espa\u00f1ol y el nacimiento de la naci\u00F3n mexicana."
    },
    {
        question: "\u00bfQui\u00E9n pint\u00F3 la Mona Lisa?",
        choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
        correctAnswer: "Leonardo da Vinci",
        additionalInfo: "La Mona Lisa, tambi\u00E9n conocida como La Gioconda, fue pintada por Leonardo da Vinci entre 1503 y 1506 en Italia."
    },
    {
        question: "\u00bfCu\u00E1l es la moneda de Jap\u00F3n?",
        choices: ["Won", "Yen", "D\u00F3lar"],
        correctAnswer: "Yen",
        additionalInfo: "El yen es la moneda oficial de Jap\u00F3n, y su s\u00EDmbolo es ¥. Es una de las principales monedas de reserva del mundo."
    },
    {
        question: "\u00bfCu\u00E1l es la monta\u00f1a m\u00E1s alta de \u00E1frica?",
        choices: ["Monte Everest", "Kilimanjaro", "Alpes"],
        correctAnswer: "Kilimanjaro",
        additionalInfo: "El Kilimanjaro es la monta\u00f1a m\u00E1s alta de \u00E1frica, ubicada en Tanzania. Es un volc\u00E1n inactivo y una popular atracci\u00F3n para los excursionistas."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se celebraron los primeros Juegos Ol\u00EDmpicos modernos?",
        choices: ["1886", "1900", "1896"],
        correctAnswer: "1896",
        additionalInfo: "Los primeros Juegos Ol\u00EDmpicos modernos se celebraron en Atenas, Grecia, en 1896, reviviendo la tradici\u00F3n deportiva de la antigua Grecia."
    },
    {
        question: "\u00bfCu\u00E1l es la ciudad m\u00E1s poblada del mundo?",
        choices: ["Delhi", "Pek\u00EDn", "Tokio"],
        correctAnswer: "Tokio",
        additionalInfo: "Tokio, la capital de Jap\u00F3n, es la ciudad m\u00E1s poblada del mundo. Es un importante centro econ\u00F3mico, cultural y tecnol\u00F3gico."
    },
    {
        question: "\u00bfEn qu\u00E9 pa\u00EDs se encuentra Machu Picchu?",
        choices: ["Per\u00FA", "Ecuador", "Colombia"],
        correctAnswer: "Per\u00FA",
        additionalInfo: "Machu Picchu es una antigua ciudad inca ubicada en los Andes de Per\u00FA. Es uno de los sitios arqueol\u00F3gicos m\u00E1s famosos del mundo."
    },
    {
        question: "\u00bfQui\u00E9n fue el primer presidente de Estados Unidos?",
        choices: ["John Adams", "Thomas Jefferson", "George Washington"],
        correctAnswer: "George Washington",
        additionalInfo: "George Washington fue el primer presidente de Estados Unidos, sirviendo dos mandatos de 1789 a 1797. Es conocido como el Padre de la Patria."
    },
    {
        question: "\u00bfCu\u00E1l es el animal m\u00E1s grande del planeta?",
        choices: ["Elefante africano", "Ballena azul", "Jirafa"],
        correctAnswer: "Ballena azul",
        additionalInfo: "La ballena azul es el animal m\u00E1s grande del planeta, con longitudes que pueden superar los 30 metros. Son mam\u00EDferos marinos y se alimentan principalmente de krill."
    },
    {
        question: "\u00bfCu\u00E1l es el pa\u00EDs m\u00E1s peque\u00f1o del mundo?",
        choices: ["M\u00F3naco", "Nauru", "Vaticano"],
        correctAnswer: "Vaticano",
        additionalInfo: "El Vaticano es el pa\u00EDs m\u00E1s peque\u00f1o del mundo, completamente rodeado por la ciudad de Roma, Italia. Es el centro espiritual y administrativo de la Iglesia Cat\u00F3lica."
    },
    {
        question: "\u00bfEn qu\u00E9 continente se encuentra la Gran Barrera de Coral?",
        choices: ["Asia", "\u00E1frica", "Ocean\u00EDa"],
        correctAnswer: "Ocean\u00EDa",
        additionalInfo: "La Gran Barrera de Coral, el arrecife de coral m\u00E1s grande del mundo, se encuentra en el continente de Ocean\u00EDa, frente a la costa de Queensland, Australia."
    },
    {
        question: "\u00bfCu\u00E1l es la capital de Canad\u00E1?",
        choices: ["Toronto", "Ottawa", "Vancouver"],
        correctAnswer: "Ottawa",
        additionalInfo: "Ottawa es la capital de Canad\u00E1 y la cuarta ciudad m\u00E1s grande del pa\u00EDs. Se encuentra en la provincia de Ontario, a orillas del r\u00EDo Ottawa."
    },
    {
        question: "\u00bfQui\u00E9n escribi\u00F3 'El principito'?",
        choices: ["Antoine de Saint-Exup\u00E9ry", "Jules Verne", "Franz Kafka"],
        correctAnswer: "Antoine de Saint-Exup\u00E9ry",
        additionalInfo: "'El principito' fue escrito por Antoine de Saint-Exup\u00E9ry y publicado por primera vez en 1943. Es una obra cl\u00E1sica de la literatura mundial."
    },
    {
        question: "\u00bfCu\u00E1l es el r\u00EDo m\u00E1s largo de Am\u00E9rica del Sur?",
        choices: ["Amazonas", "Paran\u00E1", "Orinoco"],
        correctAnswer: "Amazonas",
        additionalInfo: "El r\u00EDo Amazonas es el m\u00E1s largo de Am\u00E9rica del Sur y del mundo. Fluye a trav\u00E9s de varios pa\u00EDses, incluyendo Brasil, Per\u00FA y Colombia."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se inaugur\u00F3 la Torre Eiffel en Par\u00EDs?",
        choices: ["1879", "1889", "1901"],
        correctAnswer: "1889",
        additionalInfo: "La Torre Eiffel fue inaugurada en 1889 durante la Exposici\u00F3n Universal de Par\u00EDs para celebrar el centenario de la Revoluci\u00F3n Francesa."
    },
    {
        question: "\u00bfQui\u00E9n fue la primera mujer en recibir un Premio Nobel?",
        choices: ["Marie Curie", "Jane Addams", "Mother Teresa"],
        correctAnswer: "Marie Curie",
        additionalInfo: "Marie Curie fue la primera mujer en recibir un Premio Nobel, ganando el de F\u00EDsica en 1903 (compartido con su esposo Pierre) y el de Qu\u00EDmica en 1911."
    },
    {
        question: "\u00bfCu\u00E1l es la ciudad conocida como la 'Ciudad del Vaticano de Am\u00E9rica'?",
        choices: ["Buenos Aires", "Roma", "Ciudad del M\u00E9xico"],
        correctAnswer: "Ciudad del M\u00E9xico",
        additionalInfo: "Ciudad del M\u00E9xico es a veces llamada la 'Ciudad del Vaticano de Am\u00E9rica' debido a su alta concentraci\u00F3n de iglesias y sitios religiosos."
    },
    {
        question: "\u00bfCu\u00E1l es el instrumento musical nacional de Jap\u00F3n?",
        choices: ["Shamisen", "Taiko", "Koto"],
        correctAnswer: "Koto",
        additionalInfo: "El koto es un instrumento musical de cuerda tradicional japon\u00E9s. Tiene una larga historia y es conocido por su distintivo sonido mel\u00F3dico."
    },
    {
        question: "\u00bfCu\u00E1l es la cadena monta\u00f1osa m\u00E1s larga del mundo?",
        choices: ["Himalayas", "Andes", "Monta\u00f1as Rocosas"],
        correctAnswer: "Andes",
        additionalInfo: "Los Andes son la cadena monta\u00f1osa m\u00E1s larga del mundo, extendi\u00E9ndose por m\u00E1s de 7,000 kil\u00F3metros a lo largo de la costa occidental de Am\u00E9rica del Sur."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se fund\u00F3 Google?",
        choices: ["1996", "1998", "2000"],
        correctAnswer: "1998",
        additionalInfo: "Google fue fundado en 1998 por Larry Page y Sergey Brin mientras eran estudiantes de posgrado en la Universidad de Stanford, California."
    },
    {
        question: "\u00bfCu\u00E1l es la capital de Australia?",
        choices: ["S\u00EDdney", "Melbourne", "Canberra"],
        correctAnswer: "Canberra",
        additionalInfo: "Canberra es la capital de Australia y se encuentra en el Territorio de la Capital Australiana. Fue elegida como la capital en 1908."
    },
    {
        question: "\u00bfQui\u00E9n escribi\u00F3 'Cien a\u00f1os de soledad'?",
        choices: ["Gabriel Garc\u00EDa M\u00E1rquez", "Pablo Neruda", "Isabel Allende"],
        correctAnswer: "Gabriel Garc\u00EDa M\u00E1rquez",
        additionalInfo: "'Cien a\u00f1os de soledad' es una obra maestra del realismo m\u00E1gico escrita por el colombiano Gabriel Garc\u00EDa M\u00E1rquez, publicada en 1967."
    },
    {
        question: "\u00bfCu\u00E1l es el r\u00EDo m\u00E1s largo de Asia?",
        choices: ["Yangts\u00E9", "Ganges", "Mekong"],
        correctAnswer: "Yangts\u00E9",
        additionalInfo: "El r\u00EDo Yangts\u00E9 es el r\u00EDo m\u00E1s largo de Asia y el tercero m\u00E1s largo del mundo. Fluye a trav\u00E9s de China, desembocando en el Mar de China Oriental."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se llev\u00F3 a cabo la Revoluci\u00F3n Rusa?",
        choices: ["1905", "1917", "1923"],
        correctAnswer: "1917",
        additionalInfo: "La Revoluci\u00F3n Rusa tuvo lugar en 1917 y llev\u00F3 al derrocamiento del gobierno zarista, estableciendo el r\u00E9gimen comunista liderado por los bolcheviques."
    },
    {
        question: "\u00bfCu\u00E1l es la lengua oficial de Brasil?",
        choices: ["Espa\u00f1ol", "Portugu\u00E9s", "Ingl\u00E9s"],
        correctAnswer: "Portugu\u00E9s",
        additionalInfo: "El portugu\u00E9s es la lengua oficial de Brasil. Aunque comparte fronteras con varios pa\u00EDses de habla hispana, el portugu\u00E9s es la lengua predominante en Brasil."
    },
    {
        question: "\u00bfCu\u00E1l es el segundo metal m\u00E1s abundante en la corteza terrestre?",
        choices: ["Hierro", "Aluminio", "Cobre"],
        correctAnswer: "Aluminio",
        additionalInfo: "El aluminio es el segundo metal m\u00E1s abundante en la corteza terrestre despu\u00E9s del silicio. Se utiliza ampliamente en la construcci\u00F3n, el transporte y la industria."
    },
    {
        question: "\u00bfQui\u00E9n fue la primera mujer en ganar un Premio Nobel?",
        choices: ["Marie Curie", "Jane Addams", "Mother Teresa"],
        correctAnswer: "Marie Curie",
        additionalInfo: "Marie Curie fue la primera mujer en ganar un Premio Nobel, recibiendo el de F\u00EDsica en 1903 y el de Qu\u00EDmica en 1911 por sus contribuciones cient\u00EDficas."
    },
    {
        question: "\u00bfCu\u00E1l es el metal conocido como 'el metal de los dioses'?",
        choices: ["Oro", "Platino", "Titanio"],
        correctAnswer: "Titanio",
        additionalInfo: "El titanio es conocido como 'el metal de los dioses' debido a su resistencia, baja densidad y excelente resistencia a la corrosi\u00F3n. Se utiliza en diversas aplicaciones, desde la aeroespacial hasta la medicina."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se llev\u00F3 a cabo la Revoluci\u00F3n Francesa?",
        choices: ["1776", "1789", "1804"],
        correctAnswer: "1789",
        additionalInfo: "La Revoluci\u00F3n Francesa comenz\u00F3 en 1789 con la convocatoria de los Estados Generales y llev\u00F3 a importantes cambios pol\u00EDticos y sociales en Francia, incluida la ca\u00EDda de la monarqu\u00EDa."
    },
    {
        question: "\u00bfCu\u00E1l es el r\u00EDo m\u00E1s largo de Europa?",
        choices: ["Danubio", "Volga", "T\u00E1mesis"],
        correctAnswer: "Volga",
        additionalInfo: "El r\u00EDo Volga es el r\u00EDo m\u00E1s largo de Europa y uno de los r\u00EDos m\u00E1s importantes de Rusia. Fluye a trav\u00E9s de varias ciudades, incluyendo Mosc\u00FA."
    },
    {
        question: "\u00bfCu\u00E1l es el lago m\u00E1s grande de \u00E1frica?",
        choices: ["Lago Victoria", "Lago Tanganica", "Lago Malaui"],
        correctAnswer: "Lago Victoria",
        additionalInfo: "El Lago Victoria es el lago m\u00E1s grande de \u00E1frica y el segundo lago de agua dulce m\u00E1s grande del mundo. Compartido por Uganda, Tanzania y Kenia, es una importante fuente de agua y biodiversidad."
    },
    {
        question: "\u00bfQui\u00E9n fue el autor de 'Matar a un ruise\u00f1or'?",
        choices: ["Harper Lee", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: "Harper Lee",
        additionalInfo: "'Matar a un ruise\u00f1or' es una novela escrita por Harper Lee y publicada en 1960. Aborda temas de raza y justicia en el sur de Estados Unidos durante la d\u00E9cada de 1930."
    },
    {
        question: "\u00bfCu\u00E1l es la isla m\u00E1s grande del mundo?",
        choices: ["Groenlandia", "Australia", "Borneo"],
        correctAnswer: "Groenlandia",
        additionalInfo: "Groenlandia es la isla m\u00E1s grande del mundo por \u00E1rea. Aunque pol\u00EDticamente es parte del Reino de Dinamarca, tiene su propio gobierno aut\u00F3nomo."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se llev\u00F3 a cabo la Revoluci\u00F3n Industrial?",
        choices: ["1700s", "1800s", "1900s"],
        correctAnswer: "1700s",
        additionalInfo: "La Revoluci\u00F3n Industrial comenz\u00F3 en Gran Breta\u00f1a en la segunda mitad del siglo XVIII (1700s) y marc\u00F3 un cambio significativo en la producci\u00F3n, la tecnolog\u00EDa y la econom\u00EDa."
    },
    {
        question: "\u00bfCu\u00E1l es la capital de Sud\u00E1frica?",
        choices: ["Pretoria", "Johannesburgo", "Ciudad del Cabo"],
        correctAnswer: "Pretoria",
        additionalInfo: "Pretoria es una de las tres capitales de Sud\u00E1frica, junto con Bloemfontein y Ciudad del Cabo. Es la sede del poder ejecutivo del gobierno sudafricano."
    },
    {
        question: "\u00bfCu\u00E1l es la monta\u00f1a m\u00E1s alta de \u00E1frica?",
        choices: ["Monte Kilimanjaro", "Monte Elbr\u00FAs", "Monte Everest"],
        correctAnswer: "Monte Kilimanjaro",
        additionalInfo: "El Monte Kilimanjaro, situado en Tanzania, es la monta\u00f1a m\u00E1s alta de \u00E1frica y uno de los picos m\u00E1s altos del mundo. Atrae a escaladores y excursionistas de todo el mundo."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se inaugur\u00F3 la Torre Eiffel en Par\u00EDs?",
        choices: ["1889", "1900", "1925"],
        correctAnswer: "1889",
        additionalInfo: "La Torre Eiffel fue inaugurada en 1889 durante la Exposici\u00F3n Universal de Par\u00EDs para conmemorar el centenario de la Revoluci\u00F3n Francesa. Dise\u00f1ada por Gustave Eiffel, se ha convertido en un \u00EDcono de la ciudad."
    },
    {
        question: "\u00bfCu\u00E1l es el oc\u00E9ano m\u00E1s grande del mundo?",
        choices: ["Atl\u00E1ntico", "\u00EDndico", "Pac\u00EDfico"],
        correctAnswer: "Pac\u00EDfico",
        additionalInfo: "El Oc\u00E9ano Pac\u00EDfico es el oc\u00E9ano m\u00E1s grande del mundo, abarcando una vasta extensi\u00F3n de aguas desde el \u00E1rtico hasta el Ant\u00E1rtico. Contiene numerosas islas y es conocido por su inmensidad."
    },
    {
        question: "\u00bfCu\u00E1l es la capital de Canad\u00E1?",
        choices: ["Toronto", "Montreal", "Ottawa"],
        correctAnswer: "Ottawa",
        additionalInfo: "Ottawa es la capital de Canad\u00E1 y la cuarta ciudad m\u00E1s grande del pa\u00EDs. Es el centro pol\u00EDtico del gobierno canadiense y se encuentra en la provincia de Ontario."
    },
    {
        question: "\u00bfQui\u00E9n fue la primera mujer en el espacio?",
        choices: ["Valentina Tereshkova", "Sally Ride", "Yuri Gagarin"],
        correctAnswer: "Valentina Tereshkova",
        additionalInfo: "Valentina Tereshkova, cosmonauta sovi\u00E9tica, se convirti\u00F3 en la primera mujer en el espacio en 1963 a bordo de la nave Vostok 6. Su logro fue un hito en la historia de la exploraci\u00F3n espacial."
    },
    {
        question: "\u00bfCu\u00E1l es el instrumento musical nacional de Jap\u00F3n?",
        choices: ["Taiko", "Shamisen", "Koto"],
        correctAnswer: "Koto",
        additionalInfo: "El koto es un instrumento musical de cuerda japonesa que tiene una larga historia en la cultura japonesa. Se toca con plectros y es conocido por su sonido mel\u00F3dico y distintivo."
    },
    {
        question: "\u00bfCu\u00E1l es el canal de televisi\u00F3n m\u00E1s antiguo del mundo?",
        choices: ["BBC", "CNN", "NHK"],
        correctAnswer: "BBC",
        additionalInfo: "La British Broadcasting Corporation (BBC) es el canal de televisi\u00F3n m\u00E1s antiguo del mundo. Fue fundada en 1922 en el Reino Unido y ha sido una fuente importante de noticias y entretenimiento desde entonces."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se fund\u00F3 la Cruz Roja?",
        choices: ["1863", "1876", "1901"],
        correctAnswer: "1863",
        additionalInfo: "La Cruz Roja fue fundada en 1863 por Henry Dunant y Gustave Moynier en Ginebra, Suiza. Es una organizaci\u00F3n humanitaria internacional que brinda asistencia en casos de conflictos y desastres."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se celebr\u00F3 la primera Copa Mundial de la FIFA?",
        choices: ["1930", "1950", "1966"],
        correctAnswer: "1930",
        additionalInfo: "La primera Copa Mundial de la FIFA se celebr\u00F3 en 1930 en Uruguay. Participaron 13 equipos y Uruguay se consagr\u00F3 campe\u00F3n al vencer a Argentina en la final."
    },
    {
        question: "\u00bfCu\u00E1l es el s\u00EDmbolo qu\u00EDmico del oro?",
        choices: ["Au", "Ag", "Fe"],
        correctAnswer: "Au",
        additionalInfo: "El s\u00EDmbolo qu\u00EDmico del oro es Au, derivado del t\u00E9rmino latino 'aurum'. Es un metal precioso conocido por su brillo y uso en joyer\u00EDa, as\u00ED como en diversas aplicaciones industriales."
    },
    {
        question: "\u00bfCu\u00E1l es la obra m\u00E1s famosa de William Shakespeare?",
        choices: ["Hamlet", "Romeo y Julieta", "Macbeth"],
        correctAnswer: "Hamlet",
        additionalInfo: "'Hamlet' es una de las obras m\u00E1s famosas de William Shakespeare. Es una tragedia que explora temas como la venganza, la locura y la moralidad, y ha sido ampliamente representada y estudiada."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se proclam\u00F3 la Declaraci\u00F3n de Derechos Humanos?",
        choices: ["1948", "1955", "1960"],
        correctAnswer: "1948",
        additionalInfo: "La Declaraci\u00F3n Universal de Derechos Humanos fue proclamada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948 en Par\u00EDs. Establece los derechos fundamentales para todas las personas."
    },
    {
        question: "\u00bfCu\u00E1l es el lenguaje m\u00E1s hablado del mundo?",
        choices: ["Ingl\u00E9s", "Mandar\u00EDn", "Espa\u00f1ol"],
        correctAnswer: "Mandar\u00EDn",
        additionalInfo: "El mandar\u00EDn, o chino est\u00E1ndar, es el lenguaje m\u00E1s hablado del mundo en t\u00E9rminos de hablantes nativos. Es uno de los seis idiomas oficiales de las Naciones Unidas y es predominante en China y otras regiones."
    },
    {
        question: "\u00bfQui\u00E9n escribi\u00F3 'Cien a\u00f1os de soledad'?",
        choices: ["Gabriel Garc\u00EDa M\u00E1rquez", "Isabel Allende", "Julio Cort\u00E1zar"],
        correctAnswer: "Gabriel Garc\u00EDa M\u00E1rquez",
        additionalInfo: "'Cien a\u00f1os de soledad' es una novela del escritor colombiano Gabriel Garc\u00EDa M\u00E1rquez, ganador del Premio Nobel de Literatura en 1982. Es una obra maestra del realismo m\u00E1gico."
    },
    {
        question: "\u00bfCu\u00E1l es el r\u00EDo m\u00E1s largo de Asia?",
        choices: ["Yangts\u00E9", "Ganges", "Mekong"],
        correctAnswer: "Yangts\u00E9",
        additionalInfo: "El r\u00EDo Yangts\u00E9 es el r\u00EDo m\u00E1s largo de Asia y el tercero m\u00E1s largo del mundo. Fluye a trav\u00E9s de China, desempe\u00f1ando un papel crucial en la historia y la cultura de la regi\u00F3n."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se lanz\u00F3 el primer iPhone?",
        choices: ["2005", "2007", "2010"],
        correctAnswer: "2007",
        additionalInfo: "El primer iPhone fue lanzado por Apple en 2007. Marc\u00F3 un hito en la industria de los tel\u00E9fonos inteligentes al combinar funciones de tel\u00E9fono, reproductor de m\u00FAsica y dispositivo de navegaci\u00F3n en un solo dispositivo."
    }, {
        question: "\u00bfEn qu\u00E9 a\u00f1o se fund\u00F3 la Uni\u00F3n Europea?",
        choices: ["1957", "1965", "1973"],
        correctAnswer: "1957",
        additionalInfo: "La Uni\u00F3n Europea fue fundada el 1 de enero de 1958 con la entrada en vigor del Tratado de Roma, que estableci\u00F3 la Comunidad Econ\u00F3mica Europea (CEE) y la Comunidad Europea de la Energ\u00EDa At\u00F3mica (EURATOM)."
    },
    {
        question: "\u00bfCu\u00E1l es la capital de Australia?",
        choices: ["S\u00EDdney", "Melbourne", "Canberra"],
        correctAnswer: "Canberra",
        additionalInfo: "La capital de Australia es Canberra. Se eligi\u00F3 como la capital federal en 1908 y se encuentra en el Territorio de la Capital Australiana, entre las dos ciudades m\u00E1s grandes, S\u00EDdney y Melbourne."
    },
    {
        question: "\u00bfQui\u00E9n fue el primer presidente de Sud\u00E1frica elegido democr\u00E1ticamente?",
        choices: ["Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki"],
        correctAnswer: "Nelson Mandela",
        additionalInfo: "Nelson Mandela fue el primer presidente de Sud\u00E1frica elegido democr\u00E1ticamente. Despu\u00E9s de d\u00E9cadas de lucha contra el apartheid, asumi\u00F3 el cargo en 1994 y desempe\u00f1\u00F3 un papel crucial en la reconciliaci\u00F3n nacional."
    },
    {
        question: "\u00bfCu\u00E1l es la moneda oficial de Brasil?",
        choices: ["Peso", "Real", "D\u00F3lar"],
        correctAnswer: "Real",
        additionalInfo: "La moneda oficial de Brasil es el Real (BRL). Fue introducida en 1994 como parte del Plan Real para estabilizar la econom\u00EDa brasile\u00f1a y poner fin a la hiperinflaci\u00F3n."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se inaugur\u00F3 el Canal de Panam\u00E1?",
        choices: ["1904", "1914", "1924"],
        correctAnswer: "1914",
        additionalInfo: "El Canal de Panam\u00E1 se inaugur\u00F3 el 15 de agosto de 1914. Es una v\u00EDa de navegaci\u00F3n artificial que conecta el oc\u00E9ano Atl\u00E1ntico con el oc\u00E9ano Pac\u00EDfico, facilitando el tr\u00E1nsito de barcos entre ambos oc\u00E9anos."
    },
    {
        question: "\u00bfCu\u00E1l es el animal terrestre m\u00E1s grande?",
        choices: ["Elefante africano", "Jirafa", "Oso polar"],
        correctAnswer: "Elefante africano",
        additionalInfo: "El elefante africano es el animal terrestre m\u00E1s grande. Puede pesar hasta varias toneladas y se encuentra en diversas regiones de \u00E1frica, siendo conocido por sus grandes colmillos y orejas."
    },
    {
        question: "\u00bfCu\u00E1l es la cadena monta\u00f1osa m\u00E1s larga del mundo?",
        choices: ["Monta\u00f1as Rocosas", "Andes", "Himalayas"],
        correctAnswer: "Andes",
        additionalInfo: "Los Andes son la cadena monta\u00f1osa m\u00E1s larga del mundo, con una longitud de aproximadamente 7,000 kil\u00F3metros. Se extienden por varios pa\u00EDses de Am\u00E9rica del Sur, incluyendo Venezuela, Colombia, Ecuador, Per\u00FA, Chile y Argentina."
    },
    {
        question: "\u00bfEn qu\u00E9 pa\u00EDs se encuentra la Ciudad del Vaticano?",
        choices: ["Italia", "Espa\u00f1a", "Francia"],
        correctAnswer: "Italia",
        additionalInfo: "La Ciudad del Vaticano es un enclave independiente rodeado por la ciudad de Roma, Italia. Es el centro espiritual y administrativo de la Iglesia Cat\u00F3lica y la residencia del Papa."
    },
    {
        question: "\u00bfCu\u00E1l es la capital de Canad\u00E1?",
        choices: ["Toronto", "Ottawa", "Vancouver"],
        correctAnswer: "Ottawa",
        additionalInfo: "La capital de Canad\u00E1 es Ottawa. Aunque Toronto y Vancouver son ciudades importantes, Ottawa fue elegida como la capital en 1857 por su ubicaci\u00F3n estrat\u00E9gica entre Toronto y Montreal."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o se llev\u00F3 a cabo la Revoluci\u00F3n Rusa?",
        choices: ["1917", "1923", "1930"],
        correctAnswer: "1917",
        additionalInfo: "La Revoluci\u00F3n Rusa tuvo lugar en 1917. Fue un evento que llev\u00F3 al derrocamiento del gobierno zarista y estableci\u00F3 el gobierno comunista liderado por los bolcheviques, liderados por Vladimir Lenin."
    },
    {
        question: "\u00bfCu\u00E1l es la monta\u00f1a m\u00E1s alta de Norteam\u00E9rica?",
        choices: ["Monte McKinley", "Monte Logan", "Monte Rainier"],
        correctAnswer: "Monte McKinley",
        additionalInfo: "El Monte McKinley, tambi\u00E9n conocido como Denali, es la monta\u00f1a m\u00E1s alta de Norteam\u00E9rica. Se encuentra en Alaska, Estados Unidos, y tiene una altitud de aproximadamente 6,190 metros."
    },
    {
        question: "\u00bfEn qu\u00E9 a\u00f1o termin\u00F3 la Segunda Guerra Mundial?",
        choices: ["1945", "1950", "1940"],
        correctAnswer: "1945",
        additionalInfo: "La Segunda Guerra Mundial termin\u00F3 en 1945. La rendici\u00F3n incondicional de Alemania fue firmada el 7 de mayo de 1945, y el D\u00EDa de la Victoria en Europa (8 de mayo) marc\u00F3 el fin de la guerra en el teatro europeo."
    },
    {
        question: "\u00bfQui\u00E9n fue la primera mujer en ganar un Premio Nobel?",
        choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin"],
        correctAnswer: "Marie Curie",
        additionalInfo: "Marie Curie fue la primera mujer en ganar un Premio Nobel. Recibi\u00F3 el Premio Nobel de F\u00EDsica en 1903, compartido con su esposo Pierre Curie y Henri Becquerel, y el Premio Nobel de Qu\u00EDmica en 1911."
    },
    {
        question: "\u00bfCu\u00E1l es la lengua m\u00E1s hablada del mundo?",
        choices: ["Espa\u00f1ol", "Mandar\u00EDn", "Ingl\u00E9s"],
        correctAnswer: "Mandar\u00EDn",
        additionalInfo: "El mandar\u00EDn es la lengua m\u00E1s hablada del mundo en t\u00E9rminos de hablantes nativos. Es el idioma oficial de China y se habla en varias otras regiones y comunidades chinas en todo el mundo."
    },
    {
        question: "\u00bfCu\u00E1l es la moneda oficial de Suiza?",
        choices: ["Euro", "Franco suizo", "Corona suiza"],
        correctAnswer: "Franco suizo",
        additionalInfo: "La moneda oficial de Suiza es el franco suizo (CHF). Aunque Suiza es geogr\u00E1ficamente parte de Europa, no adopt\u00F3 el euro y tiene su propia moneda."
    },
    {
        question: "\u00bfQui\u00E9n escribi\u00F3 'El Gran Gatsby'?",
        choices: ["Ernest Hemingway", "F. Scott Fitzgerald", "Jane Austen"],
        correctAnswer: "F. Scott Fitzgerald",
        additionalInfo: "'El Gran Gatsby' fue escrito por F. Scott Fitzgerald y publicado por primera vez en 1925. Es considerada una de las grandes novelas americanas del siglo XX."
    },
    {
        question: "\u00bfEn qu\u00E9 año obtuvo Nicaragua su independencia de España?",
        choices: ["1821", "1838", "1854"],
        correctAnswer: "1821",
        additionalInfo: "Nicaragua obtuvo su independencia de España el 15 de septiembre de 1821."
    },
    {
        question: "\u00bfQui\u00E9n fue el primer gobernante de Nicaragua despu\u00E9s de la independencia?",
        choices: ["Augusto C\u00E9sar Sandino", "Jos\u00E9 Santos Zelaya", "Jos\u00E9 de la Cruz Mena"],
        correctAnswer: "Jos\u00E9 de la Cruz Mena",
        additionalInfo: "Jos\u00E9 de la Cruz Mena fue el primer gobernante de Nicaragua despu\u00E9s de la independencia en 1821."
    },
    {
        question: "\u00bfEn qu\u00E9 año se firm\u00F3 el Tratado Bryan-Chamorro, concediendo derechos a los Estados Unidos en Nicaragua?",
        choices: ["1905", "1914", "1926"],
        correctAnswer: "1914",
        additionalInfo: "El Tratado Bryan-Chamorro fue firmado en 1914 y otorg\u00F3 derechos a los Estados Unidos sobre el canal interoce\u00E1nico y otras \u00E1reas en Nicaragua."
    },
    {
        question: "\u00bfQu\u00E9 movimiento guerrillero lider\u00F3 Augusto C\u00E9sar Sandino?",
        choices: ["Frente Sandinista de Liberaci\u00F3n Nacional (FSLN)", "Contras", "Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN)"],
        correctAnswer: "Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN)",
        additionalInfo: "Augusto C\u00E9sar Sandino lider\u00F3 el Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN) en la d\u00E9cada de 1920 contra la ocupaci\u00F3n estadounidense en Nicaragua."
    },
    {
        question: "\u00bfEn qu\u00E9 año se inici\u00F3 la Revoluci\u00F3n Sandinista que derroc\u00F3 a la dictadura de Anastasio Somoza Debayle?",
        choices: ["1972", "1979", "1985"],
        correctAnswer: "1979",
        additionalInfo: "La Revoluci\u00F3n Sandinista triunf\u00F3 en 1979, derrocando a la dinast\u00EDa Somoza que gobern\u00F3 Nicaragua durante d\u00E9cadas."
    },
    {
        question: "\u00bfQui\u00E9n fue el l\u00EDder de la Revoluci\u00F3n Sandinista?",
        choices: ["Daniel Ortega", "Violeta Chamorro", "Arnoldo Alem\u00E1n"],
        correctAnswer: "Daniel Ortega",
        additionalInfo: "Daniel Ortega fue uno de los l\u00EDderes prominentes de la Revoluci\u00F3n Sandinista y se convirti\u00F3 en presidente de Nicaragua en 1981."
    },
    {
        question: "\u00bfEn qu\u00E9 año se celebraron las primeras elecciones democr\u00E1ticas despu\u00E9s de la Revoluci\u00F3n Sandinista?",
        choices: ["1985", "1990", "1996"],
        correctAnswer: "1990",
        additionalInfo: "Las primeras elecciones democr\u00E1ticas despu\u00E9s de la Revoluci\u00F3n Sandinista se llevaron a cabo en 1990, resultando en la victoria de Violeta Chamorro."
    },
    {
        question: "\u00bfCu\u00E1l fue el conflicto armado que ocurri\u00F3 en la d\u00E9cada de 1980 en Nicaragua y enfrent\u00F3 al gobierno sandinista y a grupos insurgentes respaldados por Estados Unidos?",
        choices: ["Guerra Civil Nicaragüense", "Guerra de Contras", "Conflicto Sandinista-Contrarrevolucionario"],
        correctAnswer: "Guerra de Contras",
        additionalInfo: "La Guerra de Contras fue un conflicto armado en la d\u00E9cada de 1980 en Nicaragua, marcado por la lucha entre el gobierno sandinista y grupos insurgentes respaldados por Estados Unidos."
    },
    {
        question: "\u00bfC\u00F3mo se llamaba el l\u00EDder guerrillero nicaragüense que se destac\u00F3 en la lucha contra la intervenci\u00F3n estadounidense en la d\u00E9cada de 1930?",
        choices: ["Carlos Fonseca Amador", "Rigoberto L\u00F3pez P\u00E9rez", "Augusto C\u00E9sar Sandino"],
        correctAnswer: "Augusto C\u00E9sar Sandino",
        additionalInfo: "Augusto C\u00E9sar Sandino fue un l\u00EDder guerrillero nicaragüense que resisti\u00F3 la intervenci\u00F3n estadounidense en la d\u00E9cada de 1930 y es considerado un h\u00E9roe nacional en Nicaragua."
    },
    {
        question: "\u00bfEn qu\u00E9 año se firmaron los Acuerdos de Paz de Esquipulas que contribuyeron a poner fin a los conflictos armados en la regi\u00F3n centroamericana?",
        choices: ["1987", "1992", "1996"],
        correctAnswer: "1987",
        additionalInfo: "Los Acuerdos de Paz de Esquipulas, firmados en 1987, fueron un conjunto de acuerdos que contribuyeron al cese de los conflictos armados en la regi\u00F3n centroamericana, incluyendo Nicaragua."
    },
    {
        question: "\u00bfQui\u00E9n fue la primera mujer presidenta de Nicaragua?",
        choices: ["Violeta Chamorro", "Rosario Murillo", "Sandra Torres"],
        correctAnswer: "Violeta Chamorro",
        additionalInfo: "Violeta Chamorro fue la primera mujer presidenta de Nicaragua, sirviendo de 1990 a 1997."
    },
    {
        question: "\u00bfEn qu\u00E9 año Nicaragua se uni\u00F3 al Tratado de Libre Comercio con Estados Unidos, Rep\u00FAblica Dominicana y otros pa\u00EDses de Centroam\u00E9rica?",
        choices: ["1994", "2004", "2010"],
        correctAnswer: "2004",
        additionalInfo: "Nicaragua se uni\u00F3 al Tratado de Libre Comercio (DR-CAFTA) con Estados Unidos, Rep\u00FAblica Dominicana y otros pa\u00EDses de Centroam\u00E9rica en 2004."
    },
    {
        question: "\u00bfCu\u00E1l es la moneda oficial de Nicaragua?",
        choices: ["D\u00F3lar estadounidense", "Peso nicaragüense", "C\u00F3rdoba nicaragüense"],
        correctAnswer: "C\u00F3rdoba nicaragüense",
        additionalInfo: "La moneda oficial de Nicaragua es el C\u00F3rdoba nicaragüense."
    },
    {
        question: "\u00bfEn qu\u00E9 año se fund\u00F3 la ciudad de Granada, una de las ciudades m\u00E1s antiguas de Am\u00E9rica Latina?",
        choices: ["1524", "1601", "1750"],
        correctAnswer: "1524",
        additionalInfo: "La ciudad de Granada fue fundada en 1524 y es una de las ciudades m\u00E1s antiguas de Am\u00E9rica Latina."
    },
    {
        question: "\u00bfCu\u00E1l es el volc\u00E1n m\u00E1s grande de Nicaragua?",
        choices: ["Volc\u00E1n Concepci\u00F3n", "Volc\u00E1n San Crist\u00F3bal", "Volc\u00E1n Momotombo"],
        correctAnswer: "Volc\u00E1n Concepci\u00F3n",
        additionalInfo: "El Volc\u00E1n Concepci\u00F3n es el volc\u00E1n m\u00E1s grande de Nicaragua y forma parte de la isla de Ometepe en el lago Cocibolca."
    },
    {
        question: "\u00bfQu\u00E9 tratado puso fin a la Guerra Civil Nicaragüense en 1990?",
        choices: ["Tratado de Managua", "Acuerdos de Tegucigalpa", "Acuerdos de Paz de Esquipulas"],
        correctAnswer: "Acuerdos de Paz de Esquipulas",
        additionalInfo: "Los Acuerdos de Paz de Esquipulas, firmados en 1990, contribuyeron a poner fin a la Guerra Civil Nicaragüense."
    },
    {
        question: "\u00bfCu\u00E1l es el lago m\u00E1s grande de Am\u00E9rica Central y el noveno m\u00E1s grande del continente?",
        choices: ["Lago de Nicaragua", "Lago de Yojoa", "Lago Izabal"],
        correctAnswer: "Lago de Nicaragua",
        additionalInfo: "El Lago de Nicaragua es el lago m\u00E1s grande de Am\u00E9rica Central y el noveno m\u00E1s grande del continente."
    },
    {
        question: "\u00bfCu\u00E1l fue el nombre del l\u00EDder guerrillero y fundador del Frente Sandinista de Liberaci\u00F3n Nacional (FSLN)?",
        choices: ["Daniel Ortega", "Carlos Fonseca Amador", "Tomas Borge"],
        correctAnswer: "Carlos Fonseca Amador",
        additionalInfo: "Carlos Fonseca Amador fue el l\u00EDder guerrillero y fundador del Frente Sandinista de Liberaci\u00F3n Nacional (FSLN)."
    },
    {
        question: "\u00bfEn qu\u00E9 año fue asesinado el l\u00EDder revolucionario Augusto C\u00E9sar Sandino?",
        choices: ["1928", "1934", "1942"],
        correctAnswer: "1934",
        additionalInfo: "Augusto C\u00E9sar Sandino fue asesinado en 1934, despu\u00E9s de firmar un acuerdo de paz con el gobierno, siendo traicionado posteriormente."
    },
    {
        question: "\u00bfQu\u00E9 tratado firm\u00F3 Nicaragua con Colombia en 1928, estableciendo la frontera entre ambos pa\u00EDses?",
        choices: ["Tratado Esguerra-B\u00E1rcenas", "Tratado Bryan-Chamorro", "Tratado de Tlatelolco"],
        correctAnswer: "Tratado Esguerra-B\u00E1rcenas",
        additionalInfo: "El Tratado Esguerra-B\u00E1rcenas, firmado en 1928, estableci\u00F3 la frontera entre Nicaragua y Colombia."
    },
    {
        question: "\u00bfCu\u00E1l es el nombre del movimiento que se opuso a la ocupaci\u00F3n militar estadounidense en Nicaragua en la d\u00E9cada de 1920?",
        choices: ["Contras", "Frente Sandinista", "Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN)"],
        correctAnswer: "Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN)",
        additionalInfo: "El Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN) se opuso a la ocupaci\u00F3n militar estadounidense en Nicaragua en la d\u00E9cada de 1920, liderado por Augusto C\u00E9sar Sandino."
    },
    {
        question: "\u00bfCu\u00E1l fue el principal puerto de Nicaragua en el siglo XIX?",
        choices: ["Corinto", "San Juan del Sur", "Puerto Cabezas"],
        correctAnswer: "Corinto",
        additionalInfo: "Corinto fue el principal puerto de Nicaragua en el siglo XIX, siendo estrat\u00E9gico para el comercio internacional."
    },
    {
        question: "\u00bfEn qu\u00E9 año se cre\u00F3 la Guardia Nacional de Nicaragua durante la dinast\u00EDa Somoza?",
        choices: ["1927", "1936", "1945"],
        correctAnswer: "1927",
        additionalInfo: "La Guardia Nacional de Nicaragua fue creada en 1927 durante la dinast\u00EDa Somoza, consolidando el poder del r\u00E9gimen."
    },
    {
        question: "\u00bfCu\u00E1l es el nombre del movimiento guerrillero que luch\u00F3 contra la dinast\u00EDa Somoza en la d\u00E9cada de 1970?",
        choices: ["Frente Sandinista de Liberaci\u00F3n Nacional (FSLN)", "Contras", "Ej\u00E9rcito Defensor de la Soberan\u00EDa Nacional (EDSN)"],
        correctAnswer: "Frente Sandinista de Liberaci\u00F3n Nacional (FSLN)",
        additionalInfo: "El Frente Sandinista de Liberaci\u00F3n Nacional (FSLN) fue el movimiento guerrillero que luch\u00F3 contra la dinast\u00EDa Somoza en la d\u00E9cada de 1970 y posteriormente lider\u00F3 la Revoluci\u00F3n Sandinista."
    },
    {
        question: "\u00bfEn qu\u00E9 año Nicaragua se uni\u00F3 al Mercado Com\u00FAn Centroamericano (MCCA)?",
        choices: ["1958", "1973", "1963"],
        correctAnswer: "1963",
        additionalInfo: "Nicaragua se uni\u00F3 al Mercado Com\u00FAn Centroamericano (MCCA) en 1963, buscando la integraci\u00F3n econ\u00F3mica con otros pa\u00EDses de la regi\u00F3n."
    },
    {
        question: "\u00bfEn qu\u00E9 año se estableci\u00F3 la Constituci\u00F3n de Nicaragua que aboli\u00F3 la esclavitud?",
        choices: ["1838", "1841", "1858", "1865"],
        correctAnswer: "1858",
        additionalInfo: "En 1858, se estableci\u00F3 la Constituci\u00F3n de Nicaragua, que aboli\u00F3 la esclavitud."
    },
    {
        question: "\u00bfCu\u00E1l fue el nombre del l\u00EDder guerrillero que se destac\u00F3 durante la Revoluci\u00F3n Sandinista y m\u00E1s tarde se convirti\u00F3 en presidente de Nicaragua?",
        choices: ["Daniel Ortega", "Violeta Chamorro", "Sergio Ram\u00EDrez", "Enrique Bolaños"],
        correctAnswer: "Daniel Ortega",
        additionalInfo: "Daniel Ortega fue un l\u00EDder guerrillero destacado durante la Revoluci\u00F3n Sandinista y posteriormente se convirti\u00F3 en presidente de Nicaragua."
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestions(questions, count) {
    const shuffledQuestions = questions.slice();
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions.slice(0, count);
}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question");
    const choicesList = document.getElementById("choices");

    if (currentQuestionIndex < currentQuestions.length) {
        const currentQuestion = currentQuestions[currentQuestionIndex];

        questionText.textContent = currentQuestion.question;
        choicesList.innerHTML = "";

        currentQuestion.choices.forEach(choice => {
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choiceButton.addEventListener("click", () => checkAnswer(choice));
            choicesList.appendChild(choiceButton);
        });

    } else {
        endGame();
    }
}

function checkAnswer(userChoice) {
    const currentQuestion = currentQuestions[currentQuestionIndex];

    const resultText = document.getElementById("result");
    const additionalInfoText = document.getElementById("additional-info");
    const choiceButtons = document.querySelectorAll("#choices button");

    if (userChoice === currentQuestion.correctAnswer) {
        score++;
        const currentScoreElement = document.getElementById("currentScore");
        currentScoreElement.textContent = score;
        resultText.textContent = `Respuesta: Correcta`;
        resultText.style.color = 'green';
        additionalInfoText.textContent = `${currentQuestion.additionalInfo}`;
        // Reproduce el sonido
        const correctSound = document.getElementById("correctSound");
        correctSound.play();

        // Resalta en verde la respuesta correcta
        const correctAnswerIndex = currentQuestion.choices.indexOf(currentQuestion.correctAnswer);
        const correctAnswerButton = choiceButtons[correctAnswerIndex];
        correctAnswerButton.style.backgroundColor = 'green';
    } else {
        resultText.textContent = `Respuesta: Incorrecta`;
        resultText.style.color = 'red';
        additionalInfoText.textContent = `${currentQuestion.additionalInfo}`;
        // Respuesta incorrecta, reproduce el sonido incorrecto
        const incorrectSound = document.getElementById("incorrectSound");
        incorrectSound.play();

        // Resalta en rojo la respuesta incorrecta
        const incorrectAnswerIndex = currentQuestion.choices.indexOf(userChoice);
        const incorrectAnswerButton = choiceButtons[incorrectAnswerIndex];
        incorrectAnswerButton.style.backgroundColor = 'red';

        // Resalta en verde la respuesta correcta
        const correctAnswerIndex = currentQuestion.choices.indexOf(currentQuestion.correctAnswer);
        const correctAnswerButton = choiceButtons[correctAnswerIndex];
        correctAnswerButton.style.backgroundColor = 'green';
    }

    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";

    // Deshabilita los botones de elecci\u00F3n
    choiceButtons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
        const resultText = document.getElementById("result");
        resultText.textContent = "";
        const additionalInfoText = document.getElementById("additional-info");
        additionalInfoText.textContent = ""; // Limpiar la informaci\u00F3n adicional
        const nextButton = document.getElementById("next-button");
        nextButton.style.display = "none";


    } else {
        endGame();

    }
}

function sound() {
    const soundId = score > 10 ? "achievementSound" : "defeatSound";
    const soundElement = document.getElementById(soundId);
    soundElement.play();
}

function endGame() {

    const container = document.querySelector(".container");
    container.innerHTML = `
        <audio id="achievementSound" src="audios/victoria.mp3"></audio>
        <audio id="defeatSound" src="audios/derrota.mp3"></audio>
        <h1>Trivia completada</h1>
        <p>Puntaje final: ${score}/${currentQuestions.length}</p>
        <button onclick="restartGame()">Jugar de nuevo</button>
    `;
    sound();
    // Oculta el puntaje cuando se muestra la pantalla de trivia completada
    const scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.style.display = "none";
}

function restartGame() {
    location.reload();
}

// Inicia el juego con 20 preguntas aleatorias
currentQuestions = getRandomQuestions(questions, 20);
displayQuestion();
