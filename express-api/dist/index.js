"use strict";
// console.log('Hola Mundo');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. npm init
// 2. node index
// 3. https://expressjs.com/es/ (Express por el momento no tiene soporte de TS)
// 4. npm install express --save
// 5. tsc --init
// 6. npm i --save-dev @types/express
// 7. node dist/index.js
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Nuevo id: 1239817321',
    });
    res.json({
        ok: true,
        msg: 'Todo salió bien!',
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
