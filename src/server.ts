import express,{ Application} from 'express';
import cors from './config/cors';
import morgan from 'morgan';
import Routes from './route/routes';
import bodyParser from 'body-parser';
class Server {
	public express: Application;
	public cors: any;
	constructor() {
		this.cors = cors.Header;
		this.express = express();
		this.middleaware();
	}

	middleaware(): void {
		this.express.use(morgan('dev'));
		this.express.use(express.urlencoded({ extended: true }));
		this.express.use(bodyParser.urlencoded({ extended: true}))
		this.express.use(express.json());
		this.express.use(this.cors );
		this.router(this.express);
	}
	private router(app: Application): void {
		Routes.initRoutes(app);
	}
}

export default new Server().express;