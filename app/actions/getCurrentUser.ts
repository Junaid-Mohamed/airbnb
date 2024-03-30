import {getServerSession} from "next-auth/next"

import { authOptions } from "@/pages/api/auth/[...nextauth]"
import prisma from "@/app/libs/prismadb";

export async function getSession(){
    return await getServerSession(authOptions);
}

export default async function getCurrentUser(){
    try {
        // not api call direct call, so not routing the error to client side.
        // this is how u get sessions in server components.
        const session = await getSession();

        if(!session?.user?.email) return null;

        const currentUser = await prisma.user.findUnique({
            where:{
                email:session.user.email as string
            }
        })

        if(!currentUser){
            return null;
        }

        return {
            ...currentUser,
            createdAt:currentUser.createdAt.toISOString(),
            updatedAt:currentUser.updatedAt.toISOString(),
            emailVerified:currentUser.emailVerified?.toISOString() || null
            
        };
    } catch (error:any) {
        return null;
    }
}