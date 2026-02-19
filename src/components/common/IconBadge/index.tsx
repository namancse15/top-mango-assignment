import { ReactNode } from "react"
import Badge from "@/components/common/Badge"
import "@/components/common/IconBadge/style.scss"

type BadgeProps = {
    children?: ReactNode
}

const IconBadge: React.FC<BadgeProps> = (props: BadgeProps) => {
    const classes = [
        'icon-badge',
    ].filter(Boolean).join(' ')

    return (
        <Badge 
            className={classes}
            withBorder
        >
            {props.children}
        </Badge>
    )
}

export default IconBadge