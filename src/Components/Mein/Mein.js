import React, {useState} from 'react';
import './Mein.css'
import IconMein1 from '../Svg/IconMein1.svg'
import IconMein2 from '../Svg/IconMein2.svg'
import IconMein3 from '../Svg/IconMein3.svg'
import IconMein4 from '../Svg/IconMein4.svg'
import IconMein5 from '../Svg/IconMein5.svg'
import IconMein6 from '../Svg/IconMein6.svg'
import IconMein7 from '../Svg/IconMein7.svg'
import Photo1 from '../Photo/Photo1.WebP'
import Photo2 from '../Photo/Photo2.WebP'
import Photo3 from '../Photo/Photo3.WebP'
import Photo4 from '../Photo/Photo4.WebP'


const Mein = () => {
  const [arr, setArr] = useState(null)
  const [number, setNumber] = useState(0)

  const click = (number) => {
    setNumber(number)
    setArr([
      'Coca Cola Project  ', 'Link Colors', 'Additional Content',
      'Disimissing', 'Java Script Behavior', 'Java Script Behavior',
      'Task Board',
    ])

  }

  return (
    <div className='wrapperMein'>
      <div className='logo'>
        <div className='iconMein'>
          <div><img src={IconMein1} alt=''/></div>
          <div><img src={IconMein2} alt=''/></div>
          <div><img src={IconMein3} alt=''/></div>
          <div><img src={IconMein4} alt=''/></div>
          <div><img src={IconMein5} alt=''/></div>
          <div><img src={IconMein6} alt=''/></div>
        </div>
        <div className='iconMein iconPhoto'>
          <img src={Photo1} alt=""/>
          <img src={Photo2} alt=""/>
          <img src={Photo3} alt=""/>
          <img src={Photo4} alt=""/>
          <div><img src={IconMein7} alt=''/></div>
        </div>
      </div>
      <div className='project'>
        <p>MAIN MENU</p>
        <div className="meinDiv meinDiv1">
          <div className='iconAfter iconAfter1'></div>
          <p>Dashboard</p>
          <div className='icon icon1' onClick={(e) => {
            click(1)
          }}></div>
        </div>
        {number === 1 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>

            })}
          </div>
          : null
        }

        <div className="meinDiv meinDiv2">
          <div className='iconAfter iconAfter2'></div>
          <p>Applocations</p>
          <div className='icon icon2' onClick={(e) => {
            click(2)
          }}></div>
        </div>
        {number === 2 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>

            })}
          </div>
          : null
        }

        <div className="meinDiv meinDiv3">
          <div className='iconAfter iconAfter3'></div>
          <p>Clients</p>
          <div className='icon icon3' onClick={(e) => {
            click(3)
          }}></div>
        </div>
        {number === 3 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>

            })}
          </div>
          : null
        }

        <div className="meinDiv meinDiv4">
          <div className='iconAfter iconAfter4'></div>
          <p>Projects</p>
          <div className='icon icon4' onClick={(e) => {
            click(4)
          }}></div>
        </div>
        {number === 4 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>

            })}
          </div>
          : null
        }

        <div className="meinDiv meinDiv5">
          <div className='iconAfter iconAfter5'></div>
          <p>Applocations</p>
          <div className='icon icon5' onClick={(e) => {
            click(5)
          }}></div>
        </div>
        {number === 5 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>

            })}
          </div>
          : null
        }

        <p>SECOND MENU</p>

        <div className="meinDiv meinDiv6">
          <div className='iconAfter iconAfter6'></div>
          <p>Intergrations</p>
          <div className='icon icon6' onClick={(e) => {
            click(6)
          }}></div>
        </div>
        {number === 6 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>
            })}
          </div>
          : null
        }
        <div className="meinDiv meinDiv7">
          <div className='iconAfter iconAfter7'></div>
          <p>Users</p>
          <div className='icon icon7' onClick={(e) => {
            click(7)
          }}></div>
        </div>
        {number === 7 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>
            })}
          </div>
          : null
        }
        <div className="meinDiv meinDiv8">
          <div className='iconAfter iconAfter8'></div>
          <p>Settings</p>
          <div className='icon icon8' onClick={(e) => {
            click(8)
          }}></div>
        </div>
        {number === 8 ?
          <div className='ulProject'>
            {arr.map((value, index) => {
              return <div key={index} className='liProject'>
                <ul>
                  <li>{value}</li>
                </ul>
                <div className='arrow'></div>
              </div>
            })}
          </div>
          : null
        }
      </div>
    </div>
  );
};

export default Mein;