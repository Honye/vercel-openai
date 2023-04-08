import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: NextRequest) {
  const url = new URL(req.url)
  url.host = 'api.openai.com'
  url.pathname = url.pathname.replace(/^\/api/, '')
  return fetch(
    url.toString(),
    {
      method: req.method,
      headers: req.headers,
      body: req.body,
      signal: req.signal,
    }
  )
}
