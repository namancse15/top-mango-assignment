import ClockSvgIcon from "@/components/common/InlineSvgIcons/ClockSvgIcon"
import LockSimpleSvgIcon from "@/components/common/InlineSvgIcons/LockSimpleSvgIcon"

type Props = {
    label?: string;
    onClick?: () => void;
    isSelected?: boolean;
} 

const NavItem = (props: Props) => {
    const { label, onClick, isSelected } = props

    const handleClick = () => {
        onClick?.()
    }

    const classes = [
        "nav-item",
        isSelected ? 'selected' : null
    ].filter(Boolean).join(" ")

    return (
        <div className={classes} onClick={handleClick}>
            {isSelected ? <ClockSvgIcon className="clock-icon" /> : null}
            <span className="label">{label}</span>
            {isSelected ? null : <LockSimpleSvgIcon />}
        </div>
    )
}

export default NavItem