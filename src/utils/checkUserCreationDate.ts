export function CheckUserCreationDate(creationTime: any) {
  const createdAt = creationTime;
  const createdAtTimestamp = new Date(createdAt).getTime();
  return Date.now() - createdAtTimestamp < 5 * 1000;
}
