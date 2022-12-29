// console.log('Hola Mundo');

// 1. npm init
// 2. node index
// 3. https://expressjs.com/es/ (Express por el momento no tiene soporte de TS)
// 4. npm install express --save
// 5. tsc --init
// 6. npm i --save-dev @types/express
// 7. node dist/index.js

import express from 'express';

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    msg: 'Nuevo id: 1239817321',
  })

  res.json({
    ok: true,
    msg: 'Todo salió bien!',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})