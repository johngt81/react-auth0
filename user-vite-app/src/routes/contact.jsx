import { useParams } from 'react-router-dom'

export default function Contact() {
    const { contactId } = useParams();

    return (
        <>
            <h1>Hello Contact {contactId}</h1>
            <h2>This is a Protected Page</h2>
        </>)
}