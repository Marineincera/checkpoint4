import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';
import { CategoryPerformance } from '../entity/categoryPerformance.entity';
import { CategoryPrice } from '../entity/categoryPrice.entity';
import { Message } from '../entity/message.entity';
import { Performance } from '../entity/performance.entity';
import { Place } from '../entity/place.entity';
import { Price } from '../entity/price.entity';
import { Representation } from '../entity/representation.entity';
import { UserRole } from '../entity/userRole.entity';
import { Token } from '../entity/token.entity';

export default async () => {

    await createConnection({
        type: 'mysql',
        host: process.env.CHECKPOINT_HOST,
        username: process.env.CHECKPOINT_USER,
        password: process.env.CHECKPOINT_PASS,
        database: process.env.CHECKPOINT_DATABASE,
        entities: [
            User,
            CategoryPerformance,
            CategoryPrice,
            Message,
            Performance,
            Place,
            Price,
            Representation,
            UserRole,
            Token,
        ],
        synchronize: true,
    });
};
