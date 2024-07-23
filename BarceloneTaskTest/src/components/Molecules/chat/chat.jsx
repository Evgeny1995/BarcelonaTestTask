import React, { useEffect, useRef, useState } from 'react'
import styles from './chat.module.scss'
import clsx from 'clsx'
import { useChatsData } from '../../../store.js'

const Chat = props => {
	const chatsData = useChatsData(state => state.chatsDataArr)
	const chatsHistory = useChatsData(state => state.historyMessage)
	const addMessage = useChatsData(state => state.addMessageToChats)
	const [inputData, setInputData] = useState('')
	const date = new Date().toLocaleString('ru', {
		hour: 'numeric',
		minute: 'numeric'
	})

	const scrollRef = useRef(null)

	const scrollToBottom = () => {
		scrollRef.current?.scrollIntoView()
	}

	useEffect(() => {
		scrollToBottom()
	}, [chatsHistory])

	const handelSubmit = event => {
		event.preventDefault()
		if (!inputData) return
		if (props.nameChat == 'user') {
			addMessage(inputData, chatsData[0].userAvatar, 'user', 'Сегодня ' + date)
			setInputData('')
		} else {
			addMessage(
				inputData,
				chatsData[0].adminAvatar,
				'admin',
				'Сегодня ' + date
			)
			setInputData('')
		}

		scrollToBottom()
	}

	return (
		<div className={styles.chat_wrap}>
			<div className={styles.chat_user_info}>
				<img
					className={styles.user_info_avatar}
					src={
						props.nameChat === 'user'
							? chatsData[0].userAvatar
							: chatsData[0].adminAvatar
					}
					alt=''
				/>
				<div className={styles.user_info_text_container}>
					<p className={styles.user_info_name}>
						{props.nameChat === 'user' ? chatsData[0].user : chatsData[0].admin}
					</p>
					<p className={styles.user_info_role}>
						{props.nameChat === 'user'
							? chatsData[0].userRole
							: chatsData[0].adminRole}
					</p>
				</div>
			</div>

			<div className={styles.message_out_block_container}>
				{chatsHistory.map((message, index) => (
					<div
						key={index}
						className={
							message.sender === 'user'
								? clsx(styles.message_item_container, styles.backround_user)
								: styles.message_item_container
						}
					>
						<div className={styles.message_item} key={index}>
							<div className={styles.message_item_avatar_block}>
								<img
									className={styles.message_item_avatar}
									src={message.avatar}
									alt=''
								/>
							</div>
							<div className={styles.message_item_text_block}>
								<p className={styles.message_item_text}>{message.text}</p>
								<p className={styles.message_item_date}>{message.date}</p>
							</div>
						</div>
					</div>
				))}
				<div ref={scrollRef} />
			</div>

			<div className={styles.publish_block}>
				<img
					src={
						props.nameChat === 'user'
							? chatsData[0].userAvatar
							: chatsData[0].adminAvatar
					}
					alt='аватар пользователя'
				/>
				<form
					onSubmit={handelSubmit}
					className={styles.publish_block_form}
					action=''
				>
					<input
						onChange={event => setInputData(event.target.value)}
						className={styles.text_field_publish}
						value={inputData}
						placeholder={'Напишите сообщение...'}
						type='text'
					/>
					<button className={styles.publish_btn} type={'submit'}>
						<svg
							width='22'
							height='22'
							viewBox='0 0 22 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0.000504511 11.7943L5.95749 14.5139L17.6432 4.88889L8.32519 15.6597L9.77636 22L11.5327 17.6455L18.3306 20.7778C18.2084 20.9007 22.1194 0.122905 21.9972 0C21.9972 0 -0.121699 11.7943 0.000504511 11.7943Z'
								fill='#FF4641'
							/>
						</svg>
					</button>
				</form>
			</div>
		</div>
	)
}

export default Chat
