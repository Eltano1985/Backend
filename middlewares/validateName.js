export function validateName(req, res, next) {
    const { name } = req.body;

    // Expresión regular para validar nombres
    const nameRegex = /^[A-Z][a-zA-Z]*$/;

    if (!name || !nameRegex.test(name)) {
        return res.status(400).json({ error: 'El nombre debe comenzar con una letra mayúscula, no contener espacios, números ni símbolos.' });
    }

    // Si es válido, continúa con el siguiente middleware o controlador
    next();
}
