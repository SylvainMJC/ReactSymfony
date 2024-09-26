Instructions d'installation du projet en local :

composer install
npm install

Vérifier la connexion base de donnée.
Une fois que les informations du serveur de base de données sont correctes (Spécifiez dans un fichier .env.local par exemple):

Créez la base de données : php bin/console doctrine:database:create
Monter le Schéma de la base de données : php bin/console doctrine:migrations:migrate
