import './Background.scss';
import backgroundImg from './background.jpg';

const Background = () => {
	const windowInnerHeight = document.documentElement.clientHeight;
	const windowInnerWidth = document.documentElement.clientWidth;
	return (
		<img src= { backgroundImg } alt="#"
			className='background'
			style={
				{ 
					height: windowInnerHeight,
					width: windowInnerWidth
				}	
			}
		/>
	)	
};

export default Background;
