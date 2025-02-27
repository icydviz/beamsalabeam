export const fetcher = async (path: string, data: any, method = 'POST') => {
  const formattedData: any = {
    method,
    headers: { 'content-type': 'application/json' }
  }

  if (method !== 'GET' && method !== 'HEAD' && data) {
    formattedData.body = JSON.stringify(data)
  }

  const result = await fetch(`/load/${path}`, formattedData)
  const response = await result.json()
  return response
}

export const resetPassword = async (request: any) => {
  const res = await fetcher(`reset-password`, request)
  return res
}
