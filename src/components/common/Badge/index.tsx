import { ReactNode } from "react"
import "@/components/common/Badge/style.scss"

type BadgeProps = {
    children?: ReactNode
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
    return <span className="badge">
        {props.children}
    </span>
}

export default Badge