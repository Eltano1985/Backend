export function validateGmail(req, res, next) {
    const { email } = req.body;

    // Expresión regular para validar Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!email || !gmailRegex.test(email)) {
        return res.status(400).json({ error: 'El correo electronico debe ser un Gmail valido' });
    }

    // Si es válido, continúa con el siguiente middleware o controlador
    next();
}