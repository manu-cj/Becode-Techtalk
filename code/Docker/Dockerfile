# Utiliser une image officielle de Node.js comme base
FROM node:16

# Créer un répertoire pour l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]





