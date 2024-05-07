import EmailFooter from "@/components/email/EmailFooter";

interface EmailCustomerTemplateProps {
    name: string,
}

export const EmailCustomerTemplate = ({name}: EmailCustomerTemplateProps) => {
    return (
        <>
            <div>
                <h1>Pozdrav {name},</h1>
                <h3>Vaš e-mail je primljen i dobit ćete odgovor u najkraćem roku.</h3>
                <br/>
                <p>Ovaj e-mail je automatski generiran i na njega se ne može odgovarati.</p>
                <p>Za dodatna pitanja javite se na: <a href={'mailto:raian@raianmelon.com'}>raian@raianmelon.com</a></p>
            </div>
            <EmailFooter/>
        </>
    )
}