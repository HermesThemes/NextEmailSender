import prisma from "@/prisma/client";
import { auth } from "@/auth/auth";
// import bcrypt from 'bcryptjs'
// import { hash } from "bcryptjs";
// import { imgbbUploader } from "imgbb-uploader";

export async function POST(request) {
   
        let Data = await request.json();


        // let hashedpass = await hash(Data.data.data.password,10)
        // let base64img = Data.data.data.image.substr(Data.data.data.image.indexOf(',') + 1);

        // const options = {
        //     apiKey: "b89e645579bd4ed0af6eea6394c431cd", 
        //     base64string: base64img,
        //   };
    
    
        // let imgdata = await imgbbUploader(options)
        
        await prisma.user.create({
            data: {
                ...Data.data,
                role: "user"
            }
        })
    
    return Response.json({  })
    
    
}