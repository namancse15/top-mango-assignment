import '@/components/Header/style.scss'
import logo from '@/assets/images/header-logo.svg'
import user_1 from '@/assets/images/user_1.jpg'
import FireSvgIcon from '@/components/common/InlineSvgIcons/FireSvgIcon'
import BadgeWithCount from '@/components/BadgeWithCount'
import BellSvgIcon from '@/components/common/InlineSvgIcons/BellSvgIcon'
import Avatar from '@/components/common/Avatar'
import HeaderNav from '@/components/Header/HeaderNav'

const Header = () => {
  return (
    <div className="header">
      <div className="header-main">
        <span className='left-content'>
          <img src={logo} alt="brand-logo" />
        </span>
        <span className='right-content'>
          <BadgeWithCount
            icon={<FireSvgIcon/>}
            count={30}
          />
          <span className='bell-notification'>
            <BellSvgIcon />
          </span>
          <Avatar 
            src={user_1} alt="user_1"
            height={32}
            width={32}
          />
        </span>
      </div>
      <HeaderNav />
    </div>
  )
}

export default Header