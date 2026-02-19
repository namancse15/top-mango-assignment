import { ReactNode } from 'react'
import '@/components/BadgeWithCount/style.scss'
import Badge from '@/components/common/Badge'

type Props = {
    icon?: ReactNode;
    count?: number;
}

const BadgeWithCount = (props: Props) => {
    const {
        count,
        icon
    } = props;

    return (
        <span className='badge-with-count'>
            <Badge>
                {icon}
                <span className='count'>{count}</span>
            </Badge>
        </span>
    )
}

export default BadgeWithCount