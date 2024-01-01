import Link from 'next/link'

type ButtonProps = {
    title: string
    href: string
}

export default function Button(props: ButtonProps) {


    return (

        <Link href={props.href}
            className="bg-green-600 text-white text-lg px-9 py-3 rounded-full 
            transition-shadow transition-colors duration-100 tracking-wider 
            hover:bg-green-700 hover:shadow-sm">
            {props.title}
        </Link>

    );

}