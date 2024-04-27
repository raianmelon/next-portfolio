import EmailFooter from "@/components/email/EmailFooter";

interface EmailAdminTemplateProps {
    name: string,
    surname: string,
    email: string,
    message: string
}

export const EmailAdminTemplate = ({name, surname, email, message}: EmailAdminTemplateProps) => {
    return (
        <>
            <div>
                <h1>Novi email od: {name} {surname}!</h1>
                <p>({email})</p>
                <br/>
                <p>{message}</p>
            </div>
            <EmailFooter/>
        </>
    )
}