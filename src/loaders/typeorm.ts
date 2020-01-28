import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

export default async () => {

    await createConnection({
        type: 'mysql',
        host: process.env.CHECKPOINT_HOST,
        username: process.env.CHECKPOINT_USER,
        password: process.env.CHECKPOINT_PASS,
        database: process.env.CHECKPOINT_DATABASE,
        entities: [
            User,
        ],
        synchronize: true,
    });
};
