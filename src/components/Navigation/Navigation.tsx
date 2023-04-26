import './Navigation.scss';

import portfolio from './navigationImgs/portfolio.png';
import game from './navigationImgs/console.png';
import sites from './navigationImgs/www.png';

import contacts from './navigationImgs/contact.png';
import telegram from './navigationImgs/telegram.png';
import mail from './navigationImgs/email.png';

import settings from './navigationImgs/settings.png';
import theme from	'./navigationImgs/night-mode.png';
import time from './navigationImgs/wall-clock.png';

import checkList from './navigationImgs/clipboard.png';
import { useState } from 'react';


const Navigation = () => {

	const [openPortfolio, setOpenPortfolio] = useState(false);
	const [openContacts, setOpenContacts] = useState(false);
	const [openSettings, setOpenSettings] = useState(false);

  return (
		<nav className="Navigation">
      <ul className="navList">
        <li>
					<img src= {portfolio} alt="portfolio"
						onClick= { () => setOpenPortfolio(!openPortfolio) }	
					/>
          <ul style={
						{
							display: openPortfolio ? 'block' : 'none'
						}
					}>
            <li>
							<a href="">
								<img src= {game} alt="game" />
							</a>
						</li>
            <li>
							<a href="">
								<img src= {sites} alt="sites" />	
							</a>
						</li>
          </ul>
        </li>
        <li>
					<img src= {contacts} alt="contacts"
						onClick= { () => setOpenContacts(!openContacts) }	
					/>
          <ul
						style={
							{
								display: openContacts ? 'block' : 'none'
							}
						}>
            <li>
							<a href="">
								<img src= {telegram} alt="telegram" />
							</a>
						</li>
						<li>
							<a href="">
								<img src= {mail} alt="mail" />
							</a>
						</li>
          </ul>
        </li>
        <li>
					<img src= {settings} alt="settings"
						onClick= { () => setOpenSettings(!openSettings) }
					/>
          <ul
						style={
							{
								display: openSettings ? 'block' : 'none'
							}
					}>
						<li>
							<a href="">
								<img src= {theme} alt="theme" />
							</a>
						</li>
						<li>
							<a href="">
								<img src= {time} alt="time" />
							</a>
						</li>
          </ul>
        </li>
				<li>
					<a href="#">
						<img src= {checkList} alt="check list"/>
					</a>
				</li>
      </ul>
    </nav>
  )
};

export default Navigation;
