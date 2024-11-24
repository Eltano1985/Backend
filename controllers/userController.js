import { query } from '../config/database';

export async function getAllUsers(req, res) {
    try {
        const [rows] = await query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios.');
    }
}

export async function createUser(req, res) {
    try {
        const { name, email } = req.body;
        const result = await query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ id: result[0].insertId, name, email });
    } catch (error) {
        res.status(500).send('Error al crear el usuario.');
    }
}
