import { checkToken } from '$lib'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ url }) => {
  const token = url.searchParams.get('token')

  if (!token) {
    return { status: 400, error: new Error('Missing token') }
  }

  const res = await checkToken(token)

  if (res.messageCode === 'token-is-valid') {
    return { token }
  }

  return { status: 404, error: new Error('Invalid token') }
}
