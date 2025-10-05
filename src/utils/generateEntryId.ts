export const generateEntryId = () => {
  const uuid = crypto.randomUUID();
  return uuid;
};
