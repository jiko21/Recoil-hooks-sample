// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../types/Todo';
import { Status } from '../../../const/status';

export interface IResponse {
  todos: Todo[];
}

const todos: Todo[] = [
  {
    status: Status.TODO,
    text: 'todo1',
  },
  {
    status: Status.TODO,
    text: 'todo2',
  },
  {
    status: Status.DOING,
    text: 'doing1',
  },
  {
    status: Status.DOING,
    text: 'doing2',
  },
  {
    status: Status.DONE,
    text: 'done1',
  },
  {
    status: Status.DONE,
    text: 'done2',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const status = req.query.status;
  res.status(200);
  res.json({ todos: todos.filter((item) => item.status === status) });
}
