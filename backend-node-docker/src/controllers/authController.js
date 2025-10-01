const authServices = require('../services/authServices'); 
const blackListRepo = require('../repositories/tokenBlackListRepository');

async function registerUser(req, res) {
    try {
        const usuario = await authServices.registerUser(req.body);
        res.status(201).json({ message: 'Usuario registrado correctamente!', data: usuario });
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

async function loginUser(req, res) {
    try {
        const token = await authServices.loginUsuario(req.body);
        res.status(201).json({ message: 'Usuario logueado correctamente!', data: token });
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

async function logout(req, res) {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({ message: 'No se proporciono el token.' });

    const token = authHeader.split(' ')[1];

    if(!token) return res.status(401).json({ message: 'No se proporciono el tokensito' });

    await blackListRepo.agregarToken(token);

    res.json({ message: 'Sesión cerrada correctamente.' });
}

module.exports = {
    registerUser,
    loginUser,
    logout
}