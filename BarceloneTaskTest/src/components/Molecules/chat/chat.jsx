import React from 'react'
import styles from './chat.module.scss'
const Chat = ({ chatsData }) => {
	console.log(chatsData)
	return (
		<div className={styles.chat_wrap}>
			<div>
				<img src={chatsData.avatarImage} alt='' />
				<div>
					<p>{chatsData.name}</p>
					<p>{chatsData.role}</p>
				</div>
			</div>
			<div>
				{chatsData.historyMessage.map((message, index) => (
					<div key={index}>
						<div>
							<img src={chatsData.avatarImage} alt='' />
						</div>
						<div>
							<p>{message}</p>
						</div>
					</div>
				))}
			</div>
			<div></div>
		</div>
	)
}

export default Chat
