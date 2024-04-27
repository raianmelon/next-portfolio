'use client'
import Link from "next/link";
import {Mail, Phone} from "lucide-react";
import axios from "axios";
import {useState} from "react";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);

    const [responseMessage, setResponseMessage] = useState<string>()
    const [responseMessageStatus, setResponseMessageStatus] = useState<number>()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [contactReason, setContactReason] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const sendEmail = async (e: any) => {
        setIsLoading(true)

        e.preventDefault()

        const response = await axios.post('/api/send', {
            name,
            surname,
            email,
            contactReason,
            message
        })

        setResponseMessage(response.data.message)
        setResponseMessageStatus(response.status)

        setIsLoading(false)
    }

    return (
        <section id={'contact'} className={'px-4 md:px-16 lg:px-52 pt-20 lg:pt-28'}>
            <h1 className={'text-3xl lg:text-center w-full mb-10'}>Kontaktirajte me</h1>
            <form onSubmit={sendEmail} className={'flex items-start lg:flex-row flex-col justify-between'}>
                <div className={'flex flex-col gap-5 justify-start items-start my-10'}>
                    <h1 className={'text-xl'}>Raian Melon</h1>
                    <Link target={'_blank'} href={'mailto:raianmelon11@gmail.com'}
                          className={'text-white hover:text-yellow font-light transition-all flex gap-4 justify-center items-center'}><Mail
                        size={30} color={'#FED700'}/>raianmelon11@gmail.com</Link>
                    <Link target={'_blank'} href={'tel:+385919810766'}
                          className={'text-white hover:text-yellow font-light transition-all flex gap-4 justify-center items-center'}><Phone
                        size={30} color={'#FED700'}/> +385 91 981 0766</Link>
                </div>
                <div className={'flex flex-col gap-10 justify-start items-start my-10 w-full lg:w-[45%]'}>
                    <div className={'flex gap-5 w-full'}>
                        <input required value={name} onChange={(e) => {setName(e.target.value)}}
                            className={'w-1/2 text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all'}
                            placeholder={'Ime'} type="text"/>
                        <input required value={surname} onChange={(e) => {setSurname(e.target.value)}}
                            className={'w-1/2 text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all'}
                            placeholder={'Prezime'} type="text"/>
                    </div>
                    <input required value={email} onChange={(e) => {setEmail(e.target.value)}}
                        className={'text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all w-full'}
                        placeholder={'E-mail'} type="email"/>
                    <input required value={contactReason} onChange={(e) => {setContactReason(e.target.value)}}
                        className={'text-white bg-background border-b-2 border-white px-2 py-2 outline-0 focus:border-yellow transition-all w-full'}
                        placeholder={'Razlog kontaktiranja'} type="text"/>
                    <textarea required value={message} onChange={(e) => {setMessage(e.target.value)}}
                        className={'h-32 text-white bg-background border-2 border-white px-4 py-2 outline-0 focus:border-yellow transition-all w-full rounded-md'}
                        placeholder={'Poruka'}/>
                    {responseMessage &&
                        <p className={`text-white rounded-md ${responseMessageStatus == 200 ? 'bg-[#298c43] border-[#298c43]' : 'border-[#8c2929] bg-[#8c2929]'} bg-opacity-30 border-2 px-4 py-3 w-full`}>
                            {responseMessage}
                        </p>
                    }
                    <button type='submit' className={'w-full py-2.5 ring-yellow bg-yellow hover:bg-transparent transition-all duration-500 hover:text-white text-black ring-[1.5px] px-4 rounded-md'} >{isLoading ? 'Slanje E-maila...' : 'Pošalji E-mail' }</button>
                </div>
            </form>
        </section>
    )
}