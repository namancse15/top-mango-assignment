import CheckSvgIcon from "@/components/common/InlineSvgIcons/CheckSvgIcon"
import LockSimpleSvgIcon from "@/components/common/InlineSvgIcons/LockSimpleSvgIcon"

type Props = {
    // label?: string;
    onClick?: () => void;
    isSelected?: boolean;
    value?: number | string;
    prefix?: string;
} 

const NavItem = (props: Props) => {
    const { 
        // label, 
        onClick, 
        isSelected,
        value,
        prefix
    } = props

    const handleClick = () => {
        onClick?.()
    }

    const classes = [
        "nav-item",
        isSelected ? 'selected' : null
    ].filter(Boolean).join(" ")

    const label = (
        <>
            <span className="prefix">{prefix}</span>
            <span className="value">{value}</span>
        </>
    )

    return (
        <div className={classes} onClick={handleClick}>
            <span className="label">{label}</span>
            {isSelected ? <CheckSvgIcon className="check-icon" /> : <LockSimpleSvgIcon />}
        </div>
    )
}

export default NavItem