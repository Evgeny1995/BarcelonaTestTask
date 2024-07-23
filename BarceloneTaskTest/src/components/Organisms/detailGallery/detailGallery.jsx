import React from 'react'
import styles from './detailGallery.module.scss'
import ModalContainer from '../../Atoms/modalGallery/modalContainer.jsx'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const DetailGallery = ({ images, onClose }) => {
	return (
		<ModalContainer>
			<div className={styles.gallery_container}>
				<button onClick={onClose} className={styles.close_btn}></button>
				<Swiper
					modules={[Navigation]}
					navigation={true}
					loop={true}
					spaceBetween={20}
					className='mySwiper'
				>
					{images.map((images, index) => (
						<SwiperSlide className={styles.gallery_item} key={index}>
							<div className={styles.gallery_img_wrap}>
								<img
									className={styles.gallery_img}
									src={images}
									alt='Фото из отзыва'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</ModalContainer>
	)
}

export default DetailGallery
