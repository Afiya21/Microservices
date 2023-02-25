import { Injectable } from '@nestjs/common';
import { cirql } from './database';
import {
  query,
  create,
  eq,
  RecordSchema,
  time,
  update,
  select,
  del,
} from 'cirql';
import { z } from 'zod';

const ERP = RecordSchema.extend({
  name: z.string().nullable(),
  email: z.string().min(1),
  email_verified_at: z.string().nullable(),
  password: z.string().nullable(),
  plan: z.number().nullable(),
  plan_expire_date: z.string().nullable(),
  requested_plan: z.number().default(0),
  type: z.string().nullable(),
  avatar: z.string().nullable(),
  lang: z.string().nullable(),
  mode: z.string().default('light'),
  created_by: z.number().min(1).default(0),
  default_pipeline: z.number().nullable(),
  delete_status: z.number().min(1).default(1),
  is_active: z.number().min(1).default(1),
  remember_token: z.string().nullable(),
  last_login_at: z.string().nullable(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
  active_status: z.boolean().default(false),
  dark_mode: z.boolean().default(false),
  messenger_color: z.string().min(1).default('#2180F3'),
});
@Injectable()
export class AppService {
  async createuser() {
    const Users = await cirql.execute({
      query: create('user').setAll({
        name: 'Abeni',
        email: 'manu@gmail.com',
        email_verified_at: '10/10/2023',
        password: '123456789',
        plan: 1,
        plan_expire_date: '10/02/2025',
        requested_plan: 2,
        type: 'technichal',
        avatar: 'me',
        lang: 'true',
        created_by: 3,
        default_pipeline: 2,
        remember_token: 'hey',
        last_login_at: '02/02/2023',
        created_at: '02/10/2022',
        updated_at: '03/03/2022',
      }),
      schema: ERP,
      params: {
        enable: true,
      },
    });
    return { name: 'user is created' };
  }
  async updateuser() {
    const Users = await cirql.execute({
      query: update('user')
        .where({
          email: 'john.doe@gmail.com',
        })
        .set('name', 'abeni'),
      schema: ERP,
      params: {
        enable: true,
      },
    });
    return { name: 'user is updated' };
  }
  async selectuser() {
    const Users = await cirql.execute({
      query: select('user').where({
        email: 'john.doe@gmail.com',
      }),
      schema: ERP,
      params: {
        enable: true,
      },
    });
    return { name: 'user' };
  }

  async deletuser() {
    const Users = await cirql.execute({
      query: del('user').where({
        email: 'john.doe@gmail.com',
      }),
      schema: ERP,
      params: {
        enable: true,
      },
    });
    return { name: 'user is deleted' };
  }
}
