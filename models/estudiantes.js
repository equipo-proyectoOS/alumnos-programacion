const {model, Schema}= require('mongoose');
const {} = require('./users');

const EstudianteSchema = new Schema({
  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

  //preguntar  sobre esto
    datos_personales: {
     
      nombre_apellido: {
        type: String,
        required: [true, "El nombre es necesario"],
      },
      edad: {
        type: Number,
        required: [true, "La edad es necesaria"],
      },
      direccion: {
        calle: {
          type: String,
          required: [true, "La calle es necesaria"],
        },
        ciudad: {
          type: String,
          required: [true, "La ciudad es necesaria"],
        },
      },
      dni: {
        type: String,
        unique: [true, "El correo está duplicado"],
        required: [true, "El correo es necesario"],
      },
      correo: {
        type: String,
        unique: [true, "El correo está duplicado"],
        required: [true, "El correo es necesario"],
      },
      numero_telefono: [
        {
          type: String,
          unique: [true, "El número de teléfono está duplicado"],
          required: [true, "El número de teléfono es necesario"],
        },
      ],
      genero: { type: Number, min: 0, max: 2 }, // 0= Hombre , 1 = Mujer , 3 = Otres
      nacionalidad: {
          type: String,
          required: true,
        
      },
    },
    secundario: {
      institucion: {
        type: String,
        required: true,
      },
      titulo: {
        type: String,
        required: true,
      },
    },
    conocimientos_informaticos:{
      type: Boolean,
      required: true
    },
    activo:{
      type: Boolean,
      default:true
    }
  });

module.exports = model('Estudiante', EstudianteSchema);
