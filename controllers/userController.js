import  pool from '../config/database.js';

export async function getAllUsers(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios.');
    }
}

export async function createUser(req, res) {
    try {
        const { name, email } = req.body;
        const result = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ id: result[0].insertId, name, email });
    } catch (error) {
        res.status(500).send('Error al crear el usuario.');
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM users WHERE id = ?', [id]);
      
        if (result.affectedRows === 0) {
        return res.status(404).json({message: 'Usuario no encotrado'});
       }
    
        res.json({ message: 'Usuario eliminado correctamente'});
    } catch (error) {
        res.status(500).json({error: 'error.message'});
    }
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params; // Captura el ID del usuario desde los parámetros de la ruta.
        const { name, email } = req.body; // Captura los datos actualizados del cuerpo de la solicitud.

        // Ejecuta la consulta SQL para actualizar el usuario.
        const result = await pool.query(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );
        
        // Verifica si algún registro fue afectado.
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Valida que los datos estén presentes (puedes adaptar esta parte según tus necesidades).
        if (!name || !email ) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios: name, email, age' });
        }

        

        

        // Respuesta de éxito.
        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        // Manejo de errores.
        res.status(500).json({ error: error.message });
    }
}



