import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://nodoTecnologicoRuben:root@cursadanodejs.ls9ii.mongodb.net/Node-js',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
)
.then(() => console.log('Conexion Exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB', error));


const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador:[String],
    createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-00' }); // Aquí defines la colección de cada grupo

const SuperHero = mongoose.model('SuperHero', superheroSchema);

async function insertSuperHero() { 
    const hero = new SuperHero({ 
    nombreSuperHeroe: 'Spiderman', 
    nombreReal: 'Peter Parker', 
    edad: 25, 
    planetaOrigen: 'Tierra', 
    debilidad: 'Radioactiva', 
    poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'], 
    aliados: ['Ironman'], 
    enemigos: ['Duende Verde'],
    creador: ['Martin']
}); 
    await hero.save(); 
    console.log('Superhéroe insertado:', hero); 
}
insertSuperHero(); 
