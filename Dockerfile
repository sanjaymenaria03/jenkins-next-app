FROM node:14
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm i
RUN npm run dev
EXPOSE 3000
CMD ["npm","start"]
