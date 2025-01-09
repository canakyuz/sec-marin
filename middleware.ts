import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    try {
        // Your existing middleware logic here
        return NextResponse.next()
    } catch (error) {
        console.error('Middleware error:', error)
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: 'Internal Server Error',
            }),
            {
                status: 500,
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}

