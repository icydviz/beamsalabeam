import { json } from '@sveltejs/kit'
import { resetPassword } from '$lib'

export async function POST({ request }) {
  const { token, password } = await request.json()
  const response = await resetPassword(token, password)
  return json(response)
}
