import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();
const app = express();

// Middleware para habilitar o CORS
app.use(
	cors({
		origin: /^https:\/\/[a-zA-Z0-9-]+\.falaze\.app$/,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		optionsSuccessStatus: 204,
		credentials: true,
	})
);

// Middleware para habilitar o desenvolvimento
if (process.env.NODE_ENV === 'development') app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}!`));
