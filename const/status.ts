export const Status = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
} as const;

export type IStatus = typeof Status[keyof typeof Status];
