import { IStatus, Status } from '../const/status';
import * as React from 'react';
import { useStatus } from '../hooks/useStatus';

const TypeSelectForm: React.VFC = () => {
  const { status, setStatus } = useStatus();

  const handleStatus = (value: IStatus) => {
    setStatus(value);
  };

  return (
    <select
      value={status}
      onChange={(e) => {
        handleStatus(e.target.value as IStatus);
      }}
    >
      {Object.values(Status).map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default TypeSelectForm;
