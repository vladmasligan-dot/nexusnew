# Use Node.js 18 LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy all application files first
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]
