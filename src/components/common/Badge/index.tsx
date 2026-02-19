import { ReactNode } from "react"
import "@/components/common/Badge/style.scss"

type BadgeProps = {
    children?: ReactNode
    withBorder?: boolean
    className?: string
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
    const {
        withBorder = false,
        className,
    } = props;

    const classes = [
        'badge',
        className,
        withBorder ? 'border' : null
    ].filter(Boolean).join(' ')

    return <span className={classes}>
        {props.children}
    </span>
}

export default Badge