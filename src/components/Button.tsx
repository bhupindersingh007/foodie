import Link from 'next/link'

type ButtonProps = {
    title : string
    href : string
}

export default function Button(props: ButtonProps) {


    return <Link href={props.href} 
    className="bg-green-600 text-white px-8 py-2.5 rounded tracking-wider hover:bg-green-700">{props.title}</Link>

    
}