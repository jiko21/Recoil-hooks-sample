import { useRecoilState } from 'recoil';
import { statusState } from '../atom/status';
import { IStatus } from '../const/status';
import React from 'react';

export const useStatus = () => {
  const [status, set] = useRecoilState(statusState);

  const setStatus = React.useCallback(
    (value: IStatus) => {
      set(value);
    },
    [set],
  );

  return { status, setStatus };
};
