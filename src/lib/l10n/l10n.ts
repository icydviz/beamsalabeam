export function getEntry(path: string, dictionary: Object) {
  const keys = path.split('.')
  return keys.reduce((dict, key) => dict[key as keyof typeof dict], dictionary)
}
