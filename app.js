const express = require('express') // importamos framework el express
const app = express() // creamos una variable que acceda al express
const port = 3000 // Creamos un variable para definir el puerto

const data = require('./database/data.json');

app.set('view engine','pug');
app.use(express.static(__dirname + '/public'));

//nos traemos el de express el metodo get para retornar una respuesta
// Cuando el cliente ingrese a la ruta '/'
app.get('/', (req, res) => { // 
  res.render('index',{
    data: data.albums             
  });
});



app.get('/albums', (req, res) => { //
  const item = data.albums.find(p => p.id === req.query.id);
  res.render('albums',{
    item
  });
});  
// nos traemnos de express el metodo listen para levantar el proyecto en le puerto definido
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})