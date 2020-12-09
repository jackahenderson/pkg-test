const path = require('path');
const { common } = require('@pkg-test/common');
const  express = require('express');

console.log('server:', common);

const srv = express();
srv.use(express.static(path.join(path.dirname(__dirname), 'client', 'dist')));

srv.listen(8080);