import React, {useState} from 'react';
import './sectyon.css'
import Search from '../Svg/Search.svg'
import Arrow from '../Svg/Arrow.svg'
import Plus from '../Svg/Plus.svg'
import Photo1 from '../Photo/Photo1.WebP'
import Photo2 from '../Photo/Photo2.WebP'
import Photo3 from '../Photo/Photo3.WebP'
import Photo4 from '../Photo/Photo4.WebP'
import Photo5 from '../Photo/Photo5.WebP'
import Photo6 from '../Photo/Photo6.WebP'
import Photo7 from '../Photo/Photo7.WebP'
import Photo8 from '../Photo/Photo8.WebP'


const Section = () => {
  const [state] = useState([
    {
      photo: Photo1,
      text: 'Ina Perry',
      Online: 'Online',
      clas: 'green'
    },
    {
      photo: Photo2,
      text: 'Wesley Ray',
      Online: 'Online',
      clas: 'green'
    },
    {
      photo: Photo3,
      text: 'Eula Burton',
      Online: 'Work',
      clas: 'yellow'
    },
    {
      photo: Photo4,
      text: 'Viola Morales',
      Online: 'Offline',
      clas: 'Offline'
    },
    {
      photo: Photo5,
      text: 'Vincent Terry',
      Online: 'Online',
      clas: 'green'
    },
    {
      photo: Photo6,
      text: 'Nell Burns',
      Online: 'Offline',
      clas: 'Offline'
    },
    {
      photo: Photo7,
      text: 'Lydia Sutton',
      Online: 'Online',
      clas: 'green'
    },
    {
      photo: Photo8,
      text: 'Cynthia Evans',
      Online: 'Offline',
      clas: 'Offline'
    },
  ])
  const [how] = useState([
    'How To Frotend', 'Payment Workers', 'Web Designer',
    'President of Sales', 'Marketing Coordinator'
  ])
  const [walt] = useState([
    {
      text: 'Walt Disney',
      aig: '+12',
      number: 564,
    },
    {
      text: 'Johnson & Johnson',
      aig: '+5',
      number: 564,
    },
    {
      text: 'General Electric',
      aig: '',
      number: 387,
    },
    {
      text: 'Bank of America',
      aig: '',
      number: 321,
    },

  ])

  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()


  return (
    <div className='wrapper'>
      <div className='messages'>
        <img src={Search} alt=''/>
        <form>
          <input placeholder="Search in Messages"/>
        </form>
        <img src={Arrow} alt=''/>
      </div>
      <div className='data'>
        <div className='direct'>
          <p>Direct Messages</p>
          <img src={Plus} alt=''/>
        </div>
      </div>
      <div className='photos'>
        {state.map((value, index) => {
          return <div className='photo' key={index}>
            <div className='name'>
              <img src={value.photo} alt=''/>
              <p>{value.text}</p>
            </div>
            <div className='time'>
              <p className={value.clas}>{value.Online}</p>
              <p>{hours + ':' + minutes}</p>
            </div>
          </div>
        })}
        <button className='button'>Show More Channels</button>
      </div>
      <div className='data'>
        <div className='direct'>
          <p># Channels</p>
          <img src={Plus} alt=''/>
        </div>
      </div>
      <div className='channels'>
        {how.map((value, index) => {
          return <div className='how' key={index}>
            <ul>
              <li><a href='#'>{value}</a></li>
            </ul>
            <div className='number'>
              <p className='aig'>+12</p>
              <p>564</p>
            </div>
          </div>
        })}
        <button className='button'>Show More Channels</button>
      </div>
      <div className='data'>
        <div className='direct'>
          <p>Project Companies</p>
          <img src={Plus} alt=''/>
        </div>
      </div>
      <div className='channels radius'>
        {walt.map((value, index) => {
          return <div className='how' key={index}>
            <ul>
              <li><a href='#'>{value.text}</a></li>
            </ul>
            <div className='number'>
              <p className='aig'>{value.aig}</p>
              <p>{value.number}</p>
            </div>
          </div>
        })}
        <button className='button'>Show More Channels</button>
      </div>

    </div>
  );
};
//
export default Section;