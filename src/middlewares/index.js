import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { config } from '../config';

const {
  APP_SETTINGS: { NODE_ENV },
} = config;

export const initMiddlewares = express => {
  express.use(helmet());
  express.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
  if (NODE_ENV !== 'production') express.use(morgan('dev'));
};
