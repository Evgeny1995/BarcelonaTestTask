import React from 'react'
import styles from './BlockTitle.module.scss'
const BlockTitle = ({ ...props }) => {
	return <h3 className={styles.block_title_text}>{props.text}</h3>
}

export default BlockTitle
