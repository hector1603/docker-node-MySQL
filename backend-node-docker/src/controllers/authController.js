const authServices = require('../services/authServices');

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

module.exports = {
    registerUser,
    loginUser
}