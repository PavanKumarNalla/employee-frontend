# Stage 1: Build Angular application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Angular application
RUN npm run build


# Stage 2: Serve Angular using Nginx
FROM nginx:alpine

# Copy Angular browser build
COPY --from=build /app/dist/angular-frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
