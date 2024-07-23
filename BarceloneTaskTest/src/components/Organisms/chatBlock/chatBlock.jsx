import React from 'react'
import styles from './chatBlock.module.scss'
import BlockTitle from '../../Atoms/blockTitle/BlockTitle.jsx'
import Chat from '../../Molecules/chat/chat.jsx'

const ChatBlock = () => {
	return (
		<div className={styles.chat_wrap}>
			<div className={styles.chat_user}>
				<BlockTitle text={'Чат с пользователем'} />
				<div className={styles.chat_user_container}>
					<Chat nameChat={'user'} />
				</div>
			</div>
			<div className={styles.chat_admin}>
				<BlockTitle text={'Чат с администратором'} />
				<div className={styles.chat_admin_container}>
					<Chat nameChat={'admin'} />
				</div>
			</div>
		</div>
	)
}

export default ChatBlock
