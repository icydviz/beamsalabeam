import { PUBLIC_API } from '$env/static/public'
import { error } from '@sveltejs/kit'

export const getEnvVar = (data: string) => {
  try {
    JSON.parse(data)
  } catch (e) {
    return data
  }
  return JSON.parse(data)
}

const publicEnv = getEnvVar(PUBLIC_API)
const base = publicEnv.endpoint

export const findAllByKey = (obj: Record<string, any>, keyToFind: string): any[] => {
  return Object.entries(obj).reduce((acc: any[], [key, value]) => {
    if (key === keyToFind) {
      return acc.concat(value);
    } else if (typeof value === 'object' && value !== null) {
      return acc.concat(findAllByKey(value, keyToFind))
    }
    return acc
  }, [])
}

interface SendOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  data?: unknown
  token?: string
}

async function send({ method, path, data, token }: SendOptions): Promise<any> {
  const opts: RequestInit = { method, headers: {} }

  if (data) {
    (opts.headers as Record<string, string>)['Content-Type'] = 'application/json'
    opts.body = JSON.stringify(data)
  }

  if (token) {
    (opts.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${base}${path}`, opts)
  const text = await res.text()

  if (res.ok) {
    return text ? JSON.parse(text) : {}
  }

  const errorMessage = text
    ? (findAllByKey(JSON.parse(text), 'cause')[0] || findAllByKey(JSON.parse(text), 'message')[0])
    : ''
  throw error(res.status, errorMessage)
}

export function get(path: string, token?: string): Promise<any> {
  return send({ method: 'GET', path, token })
}

export function del(path: string, token?: string): Promise<any> {
  return send({ method: 'DELETE', path, token })
}

export function post(path: string, data?: unknown, token?: string): Promise<any> {
  return send({ method: 'POST', path, data, token })
}

export function patch(path: string, data?: unknown, token?: string): Promise<any> {
  return send({ method: 'PATCH', path, data, token })
}

export function put(path: string, data?: unknown, token?: string): Promise<any> {
  return send({ method: 'PUT', path, data, token })
}

export const checkToken = async (token: string) => {
  const res = await get(`v1/password-reset/${token}`)
  return res
}

export const resetPassword = async (token: string, password: string) => {
  const res = await post(`v1/password-reset`, { token, password })
  return res
}
