FROM node:14.15
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV PORT 8080
EXPOSE $PORT
CMD node "dist/main.js"

