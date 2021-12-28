import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { minify } from 'html-minifier';
import App from '../app';

const server = express();
const port = 3000;

server.get(
  /\.(js|css|map|ico|png|svg|woff|woff2|eot|ttf|webmanifest|txt)$/,
  express.static(path.resolve(__dirname, '../../public'))
);

server.get('/', (_, res) => {
  const rawHTML = fs.readFileSync(path.resolve(__dirname, '../app.html'), {
    encoding: 'utf8',
  });
  const replacedHTML = rawHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
  );

  res.contentType('text/html');
  res.status(200);

  return res.send(
    minify(replacedHTML, {
      collapseWhitespace: true,
      minifyCSS: true,
    })
  );
});

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
