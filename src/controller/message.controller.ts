import { Application } from 'express';
import { commonController } from '../core/abstract.controller';
import { MessageService } from '../services/message.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const MessageController = (app: Application) => {
    const messageService = new MessageService();

    const messageRouter = commonController(messageService);

    // Ajoutez les nouvelles routes ici

    app.use('/messages', messageRouter);
};
