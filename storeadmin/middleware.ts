import { getValidSubdomain } from '@/components/utils/subdomain'
import { NextRequest, NextResponse } from 'next/server'

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/ // Files
const SUBDOMAINS = ['store', 'admin']

export default function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone()

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return

  const host = req.headers.get('host')
  const subdomain = getValidSubdomain(host) || ''

  if (!SUBDOMAINS.includes(subdomain)) return

  if (subdomain) {
    console.log('🚀 ~ middleware ~ subdomain:', subdomain)
    // Subdomain available, rewriting
    console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`)
    url.pathname = `/${subdomain}${url.pathname}`
  }

  return NextResponse.rewrite(url)
}
