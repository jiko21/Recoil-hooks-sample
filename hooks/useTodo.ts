import { useQuery } from 'react-query';
import axios from 'axios';
import { IResponse } from '../pages/api/todo/[status]';
import { useRecoilValue } from 'recoil';
import { statusState } from '../atom/status';

export const useTodo = () => {
  const status = useRecoilValue(statusState);
  const { data } = useQuery<IResponse>(['todo', status], async () => {
    const { data } = await axios.get<IResponse>(`/api/todo/${status}`);
    return data;
  });
  return data ? data.todos : [];
};
