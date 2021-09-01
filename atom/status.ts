import { atom } from 'recoil';
import { IStatus, Status } from '../const/status';

export const statusState = atom<IStatus>({
  key: 'statusState',
  default: Status.TODO,
});
