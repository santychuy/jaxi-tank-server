import { connect, connection } from 'mongoose';

import { config } from '../src/config';

const {
  DB: { URI_LOCAL },
} = config;

beforeAll(async () => {
  await connect(URI_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

it('Close DB', async () => {
  await connection.close();
});
