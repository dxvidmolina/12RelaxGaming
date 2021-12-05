const e = require('express');
const fs = require('fs');
const path = require('path');
const db = require("../../../database/models");

const productoController =
            {
                detail: (req, res) => {
                    db.Producto.findByPk(req.params.id)
                    .then(producto => {
                        res
                        .status(status)
                        .json({data: producto, status:status})
                        })
                        .catch(error => 
                        {console.log(error)})     
            },list:(req, res) => {
                    db.Producto.findAll({
                        include:[{association:"generos"}]})
                        .then(producto => {
                         res.json({data:producto, total: producto.length})
                        })
                        .catch(error => 
                        {console.log(error)})
                }
            }
module.exports= productoController;