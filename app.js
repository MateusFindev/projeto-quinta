const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session = require('express-session');

const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const inicioRouter = require('./routes/inicio');
const notificacoesRouter = require('./routes/notificacoes');
const projetosRouter = require('./routes/projetos');
const salasRouter = require('./routes/salas');
const configuracoesRouter = require('./routes/configuracoes');
const ajudaRouter = require('./routes/ajuda');
const perfilRouter = require('./routes/perfil');
const loginRouter = require('./routes/login');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));

app.use(session({
  secret : 'webslesson',
  cookie : {maxAge : 60000},
  saveUninitialized : false,
  resave : false
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/inicio', inicioRouter);
app.use('/notificacoes', notificacoesRouter);
app.use('/projetos', projetosRouter);
app.use('/salas', salasRouter);
app.use('/configuracoes', configuracoesRouter);
app.use('/ajuda', ajudaRouter);
app.use('/perfil', perfilRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
