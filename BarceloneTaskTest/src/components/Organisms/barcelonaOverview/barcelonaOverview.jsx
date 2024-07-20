import React from 'react'
import styles from './barcelonaOverview.module.scss'
import barcelonaImg from '../../../assets/images/png/Barcelone-img.png'
import BlockTitle from '../../Atoms/blockTitle/BlockTitle.jsx'
import { Link } from 'react-router-dom'

const BarcelonaOverview = () => {
	return (
		<div className={styles.barcelona_overview}>
			<img
				className={styles.barcelona_img}
				src={barcelonaImg}
				alt='Собор в Барселоне'
			/>
			<div className={styles.barcelona_description_container}>
				<BlockTitle text={'Барселона — обзор города'} />
				<p className={styles.barcelona_description_text}>
					Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
					многочисленными фестивалями и гастрономическим разнообразием
					понравилась мне в первый же день пребывания и стала местом, в
					котором...
				</p>
				<Link to={'*'} className={styles.write_next_link} href=''>
					Читать дальше
				</Link>
			</div>
		</div>
	)
}

export default BarcelonaOverview
