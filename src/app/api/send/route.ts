import { Resend } from 'resend';
import {EmailAdminTemplate} from "@/components/email/EmailAdminTemplate";
import {EmailCustomerTemplate} from "@/components/email/EmailCustomerTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const {name, surname, email, contactReason, message} = await req.json()
    try {
        const dataAdmin = await resend.emails.send({
            from: 'no-reply@raianmelon.com',
            to: 'raian@raianmelon.com',
            subject: contactReason,
            react: EmailAdminTemplate({name, surname, email, message}),
        });

        const responseAdmin = Response.json(dataAdmin);
        if(responseAdmin.status == 200) {
            const dataCustomer = await resend.emails.send({
                from: 'no-reply@raianmelon.com',
                to: email,
                subject: 'Vaš e-mail je uspješno poslan!',
                react: EmailCustomerTemplate({name}),
            });
            const responseCustomer = Response.json(dataCustomer);

            if (responseCustomer.status == 200) return Response.json({'message': 'Uspješno ste me kontaktirali. Kontaktirat ću vas u roku od 48 sati!'})

            return Response.json({'message': 'Dogodila se greška pri slanju e-maila. Pokušajte ponovno kasnije.'})

        } else {
            return Response.json({'message': 'Dogodila se greška pri slanju e-maila. Pokušajte ponovno kasnije.'})
        }
    } catch (error) {
        return Response.json({ error });
    }
}