import React from 'react'
import { Link } from 'react-router-dom'
import styles from './notFound.module.scss'

const NotFound = () => {
	return (
		<div className={styles.not_found_wrap}>
			<Link className={styles.not_found_home_link} to={'/'}>
				На главную
			</Link>
			<h3 className={styles.not_found_title}>Страница не найдена</h3>
		</div>
	)
}

export default NotFound
