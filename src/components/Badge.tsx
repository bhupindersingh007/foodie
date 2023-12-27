type BadgeProps = {
    title: string
}

export default function Badge(props: BadgeProps) {

    return (
        <span className="bg-green-100 text-green-900 px-1 py-px rounded text-sm me-2">
            {props.title}
        </span>

    );

}