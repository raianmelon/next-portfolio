import { Resend } from 'resend';
import {EmailAdminTemplate} from "@/components/email/EmailAdminTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const {name, surname, email, contactReason, message} = await req.json()
    try {
        const data = await resend.emails.send({
            from: 'no-reply@raianmelon.com',
            to: 'raianmelon11@gmail.com',
            subject: contactReason,
            react: EmailAdminTemplate({name, surname, email, message}),
        });

        let response = Response.json(data);
        if(response.status == 200) {
            return Response.json({'message': 'Uspješno ste me kontaktirali. Kontaktirat ću vas u roku od 48 sati!'})
        } else {
            return Response.json({'message': 'Dogodila se greška pri slanju e-maila. Pokušajte ponovno kasnije.'})
        }
    } catch (error) {
        return Response.json({ error });
    }
}