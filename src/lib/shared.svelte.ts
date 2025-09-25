import { getEntry } from './l10n/l10n'
import t9n from './l10n/t9n'

export const app = $state({ theme: 'light', locale: 'en' })

const localized = $derived.by(() => {
  return t9n[app.locale as keyof typeof t9n]
})

const getl10n = $derived.by(() => {
  return (path: string) => getEntry(path, localized)
})

export const l = (path: string) => {
  return getl10n(path)
}
