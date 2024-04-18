export function getIndex<T>(array: T[], item: T, fieldName: keyof T): number {
  return array.findIndex(i => i[fieldName] === item[fieldName])
}

export function getIsAuth(): boolean {
  const token = localStorage.getItem('token')
  return !!token
}

export function removeToken() {
  localStorage.removeItem('token')
}