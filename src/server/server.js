import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { minify } from 'html-minifier';
import { parse } from 'node-html-parser';
import App from '../app';

const server = express();
const port = 3000;

const fileWithVersion = (fileRelativePath) => {
  const fileStats = fs.statSync(
    path.resolve(__dirname, `../../public${fileRelativePath}`)
  );
  const fileChangedTime = new Date(fileStats.mtime).getTime();

  return `${fileRelativePath}?v=${fileChangedTime}`;
};

server.get(
  /\.(js|css|map|ico|webp|svg|woff|woff2|eot|ttf|webmanifest|txt)$/,
  express.static(path.resolve(__dirname, '../../public'))
);

server.get('/', (_, res) => {
  const rawHTML = fs.readFileSync(path.resolve(__dirname, '../app.html'), {
    encoding: 'utf8',
  });
  const parsedHTML = parse(rawHTML);

  parsedHTML
    .querySelectorAll('head')[0]
    .appendChild(
      parse(`<script src="${fileWithVersion('/build/vendor.js')}"></script>`)
    );
  parsedHTML
    .querySelectorAll('body')[0]
    .appendChild(
      parse(`<script src="${fileWithVersion('/build/main.js')}"></script>`)
    );

  const finalHTML = parsedHTML
    .toString()
    .replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
    );

  res.contentType('text/html');
  res.status(200);

  return res.send(
    minify(finalHTML, {
      collapseWhitespace: true,
      minifyCSS: true,
    })
  );
});

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
