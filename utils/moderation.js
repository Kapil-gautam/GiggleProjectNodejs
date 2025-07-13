export function getRandomStatus() {
  const statuses = ['approved', 'rejected', 'pending']
  return statuses[Math.floor(Math.random() * statuses.length)]
}
