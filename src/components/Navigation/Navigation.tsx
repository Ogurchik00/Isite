import './Navigation.scss';

import console from './navigationImgs/console.png';
import gallery from './navigationImgs/image-gallery.png';
import paint from './navigationImgs/paint-palette.png';
import telegram from './navigationImgs/telegram.png';
import user from './navigationImgs/user.png';

const Navigation = () => {

  return (
    <div className='Navigation'>
			<a className='navigationLink' href="#">
				<img src= { console } alt="" />
			</a>
			<a className='navigationLink' href="#">
				<img src= { gallery } alt="" />
			</a>
			<a className='navigationLink' href="#">
				<img src= { paint } alt="" />
			</a>
			<a className='navigationLink' href="#">
				<img src= { telegram } alt="" />
			</a>
			<a className='navigationLink' href="#">
				<img src= { user } alt="" />
			</a>
    </div>
  )
};

export default Navigation;
