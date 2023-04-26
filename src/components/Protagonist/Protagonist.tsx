import './Protagonist.scss'
import protagonistImg from'./man-silhouette.png'

const Protagonist = () => {

	const windowInnerWidth = document.documentElement.clientWidth;
	const windowInnerHeight = document.documentElement.clientHeight;

  return (
		<div className='wrapper'>
			<img 
			src= {
				protagonistImg
      } 
			alt="#" 
			style={
				{
					width: windowInnerWidth / 100 * 80,
					height:windowInnerHeight / 1.5,
					marginTop: windowInnerHeight / 100 * 11
				}
			}
		/>
 </div>
  )
}

export default Protagonist;
