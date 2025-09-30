# Minimal Dockerfile for hot-dog Node.js app
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies (use package-lock.json if present)
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY . .

# Environment
ENV NODE_ENV=production
ENV PORT=2121

# The app listens on 3000 by default
EXPOSE 2121

# Start the app
CMD ["npm", "run", "start"]
