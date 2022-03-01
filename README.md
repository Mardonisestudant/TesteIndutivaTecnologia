SETUP DO BANCO DE DADOS
Neste teste foi usado orm sequelize com o banco de dados PostgreSQL , segue abaixo as
etapas para rodar o banco , caso n ã o tenha o pgsql poder á usar o mysql .
1 clonar o reposit ó rio no meu github repositorio teste .
2 entrar no diret ó rio cd src/config.json e substituir as credencias do banco de dados da sua maquina.
<br>
"development": {
"username": "seu_username",
"password": "Seu_password",
"database": "Seu_database",
"host": "seu_host",
"dialect": "seu_dialect" // postgres , mysql etc
},
3 Instalar as depend ê ncias do projeto npm i
4 Entrar do diretorio cd /src fazer a migrate das tables com npx sequelize-cli db:migrate
5 Na pasta db contem o sql das tables.
END-POINTS
POST create →
localhost:3000/user
{
"name" : "Teste",
"email": "mardoni238@gpgmail.com",
"password": "12345678",
"repetirseha":"12345678"
}
GET
lista
→ localhost:3000/users
{
"users": [
{
"id": 39,
"name": "Teste",
"email": "mardoni238@gpgmail.com",
"password": "$2b$10$noqKcq0xh0wM6cnSQ1wBReME29cHm4ysW1cy5AR.1aDr1lrlzVbGO",
"createdAt": "2022-03-01T12:54:34.857Z",
"updatedAt": "2022-03-01T12:54:34.857Z"
}
]
}GET userid → localhost:3000/user/39
{
"user": {
"id": 39,
"name": "Teste",
"email": "mardoni238@gpgmail.com",
"password": "$2b$10$noqKcq0xh0wM6cnSQ1wBReME29cHm4ysW1cy5AR.1aDr1lrlzVbGO",
"createdAt": "2022-03-01T12:54:34.857Z",
"updatedAt": "2022-03-01T12:54:34.857Z"
}
}
UPDATE
user → localhost:3000/user/update
{
"id": "8",
"name" : "Mardonis Alves",
"email": "mardonisupdate@gmail.com"
}
DELETE user → localhost:3000/user/38
PARA PRODU ÇÃ O
Para compilar o c ó digo em produ çã o basta executar o comando npm run build em espere a
compila çã o ser conclu í da , dep ô s execute npm start