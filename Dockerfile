# Use uma imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

COPY package*.json ./


# Copie os arquivos do aplicativo para o contêiner
COPY . .

# Instale as dependências
RUN npm install

# Expõe a porta em que o aplicativo será executado
EXPOSE ${PORT}

# Inicializa o aplicativo
# CMD [ "node", "index.js" ]
CMD [ "npm", "run", "start:dev" ]
