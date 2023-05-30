import React, {useState} from 'react';
import './Header.Style.css'
import './Header.Media.css'
import Menu from '../Svg/Menu.svg'
import User from '../Svg/User.svg'
import Search from '../Svg/Search.svg'
import Call from '../Svg/Call.svg'
import Icon4 from '../Svg/Icon4.svg'
import Icon from '../Svg/Icon.svg'
import {Section2} from "../Section2";
import Close from '../Svg/Close.svg'

const Mein = React.lazy(() => import('../Mein/Mein'))
const Section = React.lazy(() => import('../Section/Section'))


const Header = () => {
  const [boolean, setBoolean] = useState(true)
  const [open, setOpen] = useState(null)
  const [open1, setOpen1] = useState(null)

  const clickUser = (bol) => {
    if (bol) {
      setOpen1(<Section/>)
      setBoolean(false)
    } else {
      setOpen1(null)
      setBoolean(true)
    }

  }
  const clickMenu = () => {
    if (window.innerWidth > 1200 && window.innerWidth < 1600) {
      setOpen(<Mein/>)
    }
  }

  return (
    <div className='wrappers'>
      <header className='header'>
        <div className='menu' onClick={() => {
          clickMenu(true)
        }}>
          <img src={Menu} alt=''/>
        </div>
        <p className='constructor'>Constructor</p>
        <ul className='dashboard'>
          <li><a href='#'>Dashboard</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>User Policy</a></li>
          <li><a href='#'>Contacts</a></li>
          <li><img src={Icon} alt=''/></li>
        </ul>
        <div className='input'>
          <img src={Search} alt=''/>
          <form>
            <input placeholder='Search Transactions and Documents'/>
          </form>
          <img src={Icon4} alt=''/>
        </div>
        <img src={User} alt='' className='block'/>
        <p className='block'>Clayton Santos</p>
        <div className='menu block search'>
          <img src={Search} alt=''/>
        </div>
        <div className='menu block'>
          <img src={Call} alt=''/>
        </div>
        <div className='menu userBlock' onClick={() => {
          clickUser(boolean)
        }}>
          <img src={User} alt=''/>
        </div>
        <div className='menu block'>
          <img src={Close} alt=''/>
        </div>
      </header>
      <div className='sections'>
        {(open) ?
          <div className='open'>
            <div className='openMenu'>
              <div><img src={Menu} alt=''/></div>
              <p>Constructor</p>
              <div onClick={() => {
                setOpen(null)
              }}><img src={Close} alt=''/></div>
            </div>
            {open}
          </div>
          : null
        }
        <div className='meinMenu'>
          <Mein/>
        </div>
        <div className='section2'>
          <Section/>
        </div>
        <Section2/>
        {(open1) ?
          <div className='section'>
            {open1}
          </div>
          : null
        }
      </div>
    </div>
  );
};

export default Header;