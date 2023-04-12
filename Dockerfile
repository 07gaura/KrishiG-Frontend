FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .

RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000

RUN npm run build
RUN npm install -g serve
CMD ["serve","-s","build"]