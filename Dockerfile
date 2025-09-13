# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (change if your app uses a different one)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
