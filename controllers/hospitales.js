 const { response } = require('express')

const getHospitales = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getHospitales'
    })
}

const crearHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'creartHospital'
    })
}

const actualizarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarHospital'
    })
}

const borrarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'borrartHospital'
    })
}

module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}