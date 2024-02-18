interface AudioPlayer {
    audioVolume: number
    songDuration: number
    song: string
    details: Details
}

interface Details {
    author: string
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 36,
    song: 'Stillborn',
    details: {
        author: 'Zakk Wylde',
        year: 2003
    }
}

// La destructuracion permite asignar las propiedades de un objeto en variables individuales
// La sintaxis de 2 puntos permite desestructurar la propiedad del objeto literal a una variable con un nombre distinto
const { song: newSong, songDuration: duration, details } = audioPlayer
console.log(`Song: ${newSong}`)
console.log(`Duration: ${duration}`)

/*
    La destructuracion tambien puede ser utilizada para desctructurar objetos anidados

    Se aconseja priorizar la lectura del codigo por lo cual en este ejemplo se desestructura la propiedad author desde otra variable que se habia obtenido previamente de la destructuracion de audioPlayer llamada details
*/
const { author } = details
console.log(`Author: ${author}`)

export {}
