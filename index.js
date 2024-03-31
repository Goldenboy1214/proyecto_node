let modeloProducto = require('./backend/models/productos.models')

const exp = require('express');
const app = exp();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

/*#######################<FUNCIONES>#################################*/

app.get('/productos', async (req,res)=>{
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos)
        res.status(200).json(listadoProductos);
    else
        res.status(404).json({error: "No se encontraron productos"});

});

app.get('/productos/ref', async (req,res)=>{
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({error: "Producto no encontrado"});
});

/*Delete*/

app.delete('/productos/ref', async (req,res)=>{
    let productoEliminado = await modeloProducto.findOneAndDelete({referencia:req.params.ref});
   
    if(productoEliminado)
        res.status(200).json({"mensaje":"Producto eliminado con exito"});
    else
        res.status(404).json({error: "Producto no Eliminado"});


});

/*Insercion*/

app.post('/productos', async(req,res)=>{

        const nuevoProducto = {
            referencia: req.body.referecniaProducto,
            nombre: req.body.nombreProducto,
            descripcion: req.body.descripcionProducto,
            precio: req.body.precioProducto,
            stock: req.body.stockProducto,
            imagen: req.body.imagenProducto,
            habilitado: true,
        };
    
    let Insercion = await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje":"Registro exitoso"});
    else
        res.status(404).json({"mensaje":" Se presento un error"});

});

/*Update*/

app.delete('/productos/:ref', async(req,res)=>{

});


app.put('/productos/:ref', async(req,res)=>{

    const productoEditado = {
        referencia: req.params.ref,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };

let Actualizacion = await modeloProducto.findOneAndUpdate({referecnia:req.params.ref},productoEditado);
if(Actualizacion)
    res.status(200).json({"mensaje":"Update exitosa"})
else
    res.status(404).json({"mensaje":" Se presento un error"})

});


app.listen(process.env.PORT, ()=>{
    console.log("servidor en linea");
});