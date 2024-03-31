const mongoose = require("../config/database");

const schemeProducto = new mongoose.Schema({
    referencia: {
        type:String,
        required: [true, 'La referencia es obligatoria']
    },
    nombre: {
        type: String,
        required: true,
        defualt: [true, 'Asiganar un nombre es obligatorio']
    },
    descripcion: {
        type: String,
        defualt: [true, 'La Descripción es Obligatoria']
    },
    nombre: {
        type: Number,
        default: [0, 'El precio por defecto es de cero'],
        min: [0, 'El precio minimo es de cero']
    },
    stock: {
        type: Number,
        default: [0, 'El stock por defecto es de cero'],
        min: [0, 'El stock por defecto es de cero']
    },
    imagen: {
        type: String,
        require: [true, 'No existe la ruta o la imagen por defecto']
    },
    imagen: {
        type: Boolean,
        defualt: true
    },
})

const producto = mongoose.model("producto", schemeProducto);
module.exports = producto;


