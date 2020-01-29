import 'reflect-metadata';

import express from 'express';

import 'reflect-metadata';

import { UserController } from './controller/user.controller';
import { UserRoleController } from './controller/userRole.controller';
import { RepresentationController } from './controller/representation.controller';
import { PriceController } from './controller/price.controller';
import { PlaceController } from './controller/place.controller';
import { PerformanceController } from './controller/performance.controller';
import { MessageController } from './controller/message.controller';
import { CategoryPriceController } from './controller/categoryPrice.controller';
import { CategoryPerformanceController } from './controller/categoryPerformance.controller';
import loaders from './loaders';
async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différent loader
  await loaders(app);

  // Ajout des différentes route de votre application
  UserController(app);
  UserRoleController(app);
  RepresentationController(app);
  PriceController(app);
  PlaceController(app);
  PerformanceController(app);
  MessageController(app);
  CategoryPriceController(app);
  CategoryPerformanceController(app);

  // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log('Express server is running'));
}

startServer();
