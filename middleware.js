import { NextResponse } from 'next/server'
import { auth } from './auth/auth'
 
export default async function middleware(req){

    const session = await auth()
    
    if(session){
        if (session.user.role !== "admin" && ( req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/registre"))) {
          return NextResponse.redirect(process.env.BASE_URL)
        }
    }
    else{
      return NextResponse.redirect(`${process.env.BASE_URL}/api/auth/signin`)
    }


}

export const config = {
  matcher: ['/dashboard','/dashboard/:path*','/emails/:path*','/rawhtml','/','/registre','/schedule'],
}