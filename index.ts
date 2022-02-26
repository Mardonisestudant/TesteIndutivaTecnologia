import * as  http from 'http';
import Server from './src/server';

const server = http.createServer(Server);
const  port = 3000

server.listen(port , () => {
	console.log(`O server está online`);
	return `O server está na port ${port}`
});
server.on('error' , () => (error: NodeJS.ErrnoException) => {

 return `Ocorreu um erro: ${Error}`
});
export default  server

