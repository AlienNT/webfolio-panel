export function getIndex<T>(array: T[], item: T, fieldName: keyof T): number {
  return array.findIndex(i => i[fieldName] === item[fieldName])
}

export function getIsAuth(): boolean {
  const token = localStorage.getItem('token')
  return !!token
}

export function checkTokenExpire(token: Token) {
  const decode = JSON.parse(atob(token.split('.')[1]))
  return decode.exp * 1000 < new Date().getTime()
}