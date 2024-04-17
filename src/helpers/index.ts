export function getIndex<T>(array: T[], item: T, fieldName: keyof T): number {
  return array.findIndex(i => i[fieldName] === item[fieldName])
}