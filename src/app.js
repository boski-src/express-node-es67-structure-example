import env from './env';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import MemoryStore from 'session-memory-store'

const app = express();

const uri = `mongodb://${env.DB_USER}:${env.DB_PASS}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_DATA}`;
mongoose.connect(uri, { useNewUrlParser: true }, (error) => console.log('Database error: ' + error));

// Handler
import { serverError, Error404 } from './http/handlers/errors';

// Middlewares
import localsMiddleware from './http/middlewares/locals';
import headersMiddleware from './http/middlewares/headers';

// Routes
import webRouter from './routes/web';
import apiRouter from './routes/api';

app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride((req, res) => {
  if (req.body && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(session({
  name: `${env.APP_NAME}_SESSION`,
  cookie: { maxAge: 2 * 60 * 60 },
  saveUninitialized: true,
  store: new MemoryStore(session)({ expires: 2 * 60 * 60 }),
  resave: 'true',
  secret: 'randomString'
}));

app.use(headersMiddleware);
app.use(localsMiddleware);

app.use('/', webRouter);
app.use('/api', apiRouter);

app.use(Error404);
app.use(serverError);

export default app;