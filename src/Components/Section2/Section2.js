import React, {useEffect, useState} from 'react';
import './Section2.css'
import './Section2.Media.css'
import Arrow from '../Svg/Arrow2.svg'
import Menu from '../Svg/Menu2.svg'
import Photo1 from '../Photo/Photo1.WebP'
import Icon from '../Svg/Icon.svg'
import Heart from '../Svg/Heart.svg'
import Heart2 from '../Svg/Heart2.svg'
import Photo9 from '../Photo/Photo9.WebP'
import Photo13 from '../Photo/Photo10.WebP'
import Photo14 from '../Photo/Photo11.WebP'
import Icon2 from '../Svg/Icon2.svg'
import Icon3 from '../Svg/Icon3.svg'
import IconPhoto from '../Svg/IconPhoto.svg'
import Flag from '../Svg/Flag.svg'


const Section2 = () => {
  const [time, setTime] = useState(0)
  const [ref, setRef] = useState(null)

  const click = (number) => {

    setTime(prevState => prevState + 1)
    setTimeout(() => {
      ref[0].style.width = `${number}` + '%'
      if (number === 100) {
        return
      }
      click(number + 1)
    }, 1000)
  }


  useEffect(() => {
    setRef(Array.from(document.querySelectorAll('.blues')))
  }, [])


  return (
    <>
      <div className='wrapper2'>
        <div className='mein'>
          <div className='gap'>
            <div className='wrapperIcon user'></div>
            <div className='wrapperIcon telephone'></div>
            <div className='wrapperIcon camera'></div>
          </div>
          <ul>
            <li><p>Dennis Smith</p></li>
          </ul>
          <div className='gap'>
            <img src={Arrow} alt=''/>
            <img src={Menu} alt=''/>
          </div>
        </div>
        <div className='post'>
          <div className='stella'>
            <div className='stella1'>
              <img src={Photo1} alt=''/>
              <div>
                <p className='gray'>Stella Evans</p>
                <p className='blue'>Web Designer 12:45 PM</p>
              </div>
            </div>
            <div>
              <img src={Heart2} alt="" className='heart'/>
              <img src={Flag} alt='' className='flag'/>
              <img src={Icon} alt=""/>
            </div>
          </div>
          <div className='box'>
            <div className='file'>
              <span className='gray' onClick={() => {
                click(1)
              }}>Human Design Guidelines.pdf</span>
              <p>760.90 KB</p>
            </div>
            <div className='downloading'>
              <p>Downloading …</p>
              <p>{time}%</p>
            </div>
            <div className='loading'>
              <div className='blues'></div>
            </div>
          </div>
          <div className='stella'>
            <div className='stella1'>
              <img src={Photo9} alt=''/>
              <div>
                <p className='gray'>Edward Goodwin</p>
                <p className='blue'>Web Designer 12:45 PM</p>
              </div>
            </div>
            <div>
              <img src={Heart} alt="" className='heart'/>
              <img src={Flag} alt='' className='flag'/>
              <img src={Icon} alt=""/>
            </div>
          </div>
          <div className='photography'>
            <div className='min'></div>
            <div className='max'></div>
          </div>
        </div>
        <div className="today">
          <p>Today</p>
        </div>
        <div className='todayBox'>
          <div className='stella'>
            <div className='stella1'>
              <img src={Photo13} alt=''/>
              <div>
                <p className='gray'>Kyle Peters</p>
                <p className='blue'>Web Designer 12:45 PM</p>
              </div>
            </div>
            <div>
              <img src={Heart} alt="" className='heart'/>
              <img src={Flag} alt='' className='flag'/>
              <img src={Icon} alt=""/>
            </div>
          </div>
          <div className='kyle'>
            <p>When you starting a company you are thinking on how to cut expenses.
              One of such options to cut the startup costs is a company logo design.
              But is it good idea to order a cheap logo or work without company logo at all?</p>
          </div>
          <div className='stella'>
            <div className='stella1'>
              <img src={Photo14} alt=''/>
              <div>
                <p className='gray'>Susan Lane</p>
                <p className='blue'>Web Designer 12:45 PM</p>
              </div>
            </div>
            <div>
              <img src={Heart2} alt="" className='heart'/>
              <img src={Flag} alt='' className='flag'/>
              <img src={Icon} alt=""/>
            </div>
          </div>
          <div className='kyle margin'>
            <p>When you starting a company you are thinking on how to cut expenses.
              One of such options to cut the startup costs is a company logo design.</p>
          </div>
        </div>
        <div className='type'>
          <div>
            <img src={Icon2} alt=''/>
            <img src={IconPhoto} alt=''/>
            <form>
              <input placeholder='Type Message'/>
            </form>
          </div>
          <img src={Icon3} alt=''/>
        </div>
      </div>
    </>
  );
};

export default Section2;