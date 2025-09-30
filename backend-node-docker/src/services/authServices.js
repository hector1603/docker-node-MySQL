const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const saltRounds = 10;

async function registerUser(data) {
    const userExiste = await userRepository.getForEmail(data.email);
    if(userExiste) throw new Error('El usuario ya existe!')
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    const user = await userRepository.createUser({ ...data, password: hashedPassword, rol: 'usuario' });
    return user;
}

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const secret_key = jwtSecret;

async function loginUsuario(data) {
    const usuario = await userRepository.getForEmail(data.email);
    if(!usuario) throw new Error('Usuario no encontrado');

    const passwordCorrecto = await bcrypt.compare(data.password, usuario.password);

    const payload = { userId: usuario.id, email: usuario.email, rol: usuario.rol };

    const token = jwt.sign(payload, secret_key, {expiresIn: '1h'});

    return token;
}

function verificarToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({ message: 'No se proporsiono el token' });

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded;
        next();
    } catch(error) {
        return res.status(401).json({ message: 'Token invalido!' });
    }
}

module.exports = {
    registerUser,
    loginUsuario,
    verificarToken
}
