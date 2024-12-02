export function validateGmail(req, res, next) {
    const { email } = req.body;

    // Expresion regular para validar Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!email || !gmailRegex.test(email)) {
        return res.status(400).json({ error: 'El correo electronico debe ser un Gmail valido' });
    }

    // Si es valido, continua con el siguiente middleware o controlador
    next();
}