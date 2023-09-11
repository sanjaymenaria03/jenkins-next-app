FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run dev
EXPOSE 3000
CMD ["npm","start"]
