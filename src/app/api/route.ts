import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  // test
  return NextResponse.json({ data: 'hello world' })
}
