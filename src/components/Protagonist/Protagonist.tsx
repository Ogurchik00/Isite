import './Protagonist.scss'
import protagonistImg from'./man-silhouette.png'

const Protagonist = () => {

	const windowInnerWidth = document.documentElement.clientWidth;
	const windowInnerHeight = document.documentElement.clientHeight;

  return (
    <div className = { 'c' }>
      <img src= {
					protagonistImg
        } alt="" 
				style={
					{
						width: windowInnerWidth,
						height:windowInnerHeight / 1.5,
						marginTop: windowInnerHeight / 100 * 15
					}
				}
			/>
    </div>
    )
}

export default Protagonist;
