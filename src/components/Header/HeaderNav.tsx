import CaretLeftSvgIcon from "@/components/common/InlineSvgIcons/CaretLeftSvgIcon";
import InfoSvgIcon from "../common/InlineSvgIcons/InfoSvgIcon";

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <span className="header-nav-left">
                <span className="back-nav">
                    <CaretLeftSvgIcon />
                    <span className="content">Back</span>
                </span>
                <span className="vertical-line-wrapper">
                    <div className="vertical-line" />
                </span>
                <span className="day-indicator">
                    Day 1 of 9
                </span>
            </span>
            <span className="header-nav-right">
                <span className="info-message" >9-Day Fitness Challenge</span>
                <div className="info-icon-container"><InfoSvgIcon /></div>
            </span>
        </div>
    )
}

export default HeaderNav;