import { Cirql } from 'cirql';

export const cirql = new Cirql({
  connection: {
    endpoint: 'http://localhost:8000/rpc',
    namespace: 'ablaze',
    database: 'ERP',
  },
  credentials: {
    user: 'root',
    pass: 'root',
  },
});
