import './Background.scss';
import backgroundImg from './background.jpg';

const Background = () => {
	const windowInnerHeight = document.documentElement.clientHeight;
	const windowInnerWidth = document.documentElement.clientWidth;
  console.log(windowInnerWidth)
	return (
		<img src= { backgroundImg } alt="#"
			style={
				{ height: windowInnerHeight,
					width: windowInnerWidth
				}	
			}
		/>
	)	
};

export default Background;
