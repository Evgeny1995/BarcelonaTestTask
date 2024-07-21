import React from 'react'
import styles from './home.module.scss'
import BarcelonaOverview from '../../Organisms/barcelonaOverview/barcelonaOverview.jsx'
import BarcelonaReviewsSlider from '../../Organisms/barcelonaReviewsSlider/barcelonaReviewsSlider.jsx'
import ChatBlock from '../../Organisms/chatBlock/chatBlock.jsx'
const Home = () => {
	return (
		<div className={styles.home_wrap}>
			<BarcelonaOverview />
			<BarcelonaReviewsSlider />
			<ChatBlock />
		</div>
	)
}

export default Home
