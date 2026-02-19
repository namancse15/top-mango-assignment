import { useState } from 'react'
import '@/components/Sidebar/style.scss'
import NavItem from '@/components/Sidebar/NavItem'

const n = 9;
const days = Array.from({ length: n }, (_, index) => index + 1);

const Sidebar = () => {

  const [selected, setSelected] = useState<number>(1);

  const handleSelection = (itemNumber: number) => {
    setSelected(itemNumber)
  }

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        {days.map((item) => (
          <NavItem
            prefix="Day"
            value={item}
            isSelected={item === selected}
            onClick={() => handleSelection(item)}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar