import './database';
import { config } from './config';
import app from './app';

const {
  APP_SETTINGS: { PORT },
} = config;

(() => {
  app.listen(PORT);
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
})();
