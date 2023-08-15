export const isObject = <T extends object>(value: unknown): value is T => {
  return typeof value === 'object' && typeof value !== 'function' && value !== undefined;
};
