import express, { json } from 'express';
import userRoutes from './routes/userRoutes.js';
import { config } from 'dotenv';

config();

const app = express();

// Middleware para parsear JSON
app.use(json());

// Rutas de usuarios
app.use('/api', userRoutes);
app.get('/saludo', (req, res)=>{
    res.send("hola mundo");
})

//Iniciar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
