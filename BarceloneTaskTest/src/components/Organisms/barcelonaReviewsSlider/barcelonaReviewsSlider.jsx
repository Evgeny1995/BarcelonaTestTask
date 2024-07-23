import React, { useState } from 'react'
import './barcelonaReviewsSlider.scss'
import styles from './barcelonaReviewsSlider.module.scss'
import BlockTitle from '../../Atoms/blockTitle/BlockTitle.jsx'
import reviewerAvatar from './../../../assets/images/png/reviewerAvatar.png'
import galleryImg1 from './../../../assets/images/png/galleryImg1.png'
import galleryImg2 from './../../../assets/images/png/galleryImg2.png'
import galleryImg3 from './../../../assets/images/png/galleryImg3.png'
import likeIcon from './../../../assets/images/svg/likeIcon.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'
import DetailGallery from '../detailGallery/detailGallery.jsx'

const sliderData = [
	{
		index: 1,
		avatar: reviewerAvatar,
		name: 'Наталия полянская',
		city: 'БАРСЕЛОНА',
		reviewText:
			'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
		galleryImg: [
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3
		],
		reviewDate: 'около 1 года назад',
		comments: '9',
		likes: 9
	},
	{
		index: 2,
		avatar: reviewerAvatar,
		name: 'Elena Bulgakova',
		city: 'БАРСЕЛОНА',
		reviewText:
			'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
		galleryImg: [
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3
		],
		reviewDate: '5 месяцев назад',
		comments: '3',
		likes: 7
	},
	{
		index: 3,
		avatar: reviewerAvatar,
		name: 'Наталия полянская',
		city: 'БАРСЕЛОНА',
		reviewText:
			'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
		galleryImg: [
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3
		],
		reviewDate: 'около 1 года назад',
		comments: '9',
		likes: 9
	},
	{
		index: 4,
		avatar: reviewerAvatar,
		name: 'Elena Bulgakova',
		city: 'БАРСЕЛОНА',
		reviewText:
			'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
		galleryImg: [
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3
		],
		reviewDate: '5 месяцев назад',
		comments: '3',
		likes: 7
	},
	{
		index: 5,
		avatar: reviewerAvatar,
		name: 'Наталия полянская',
		city: 'БАРСЕЛОНА',
		reviewText:
			'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
		galleryImg: [
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3
		],
		reviewDate: 'около 1 года назад',
		comments: '9',
		likes: 9
	},
	{
		index: 6,
		avatar: reviewerAvatar,
		name: 'Elena Bulgakova',
		city: 'БАРСЕЛОНА',
		reviewText:
			'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
		galleryImg: [
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3,
			galleryImg3,
			galleryImg1,
			galleryImg2,
			galleryImg3
		],
		reviewDate: '5 месяцев назад',
		comments: '3',
		likes: 7
	}
]
const BarcelonaReviewsSlider = () => {
	const [countOfList, setCountOfList] = useState(4)

	const [images, setImages] = useState(undefined)

	const showGallery = (e, slide, setShowDetailGallery, showDetailGallery) => {
		console.log(slide)
		if (slide.index == e.target.id) {
			setShowDetailGallery(!showDetailGallery)
		}
	}

	return (
		<div className={styles.review_slider_wrap}>
			<BlockTitle text={'Отзывы о Барселоне'} />
			<Swiper
				loop={true}
				spaceBetween={20}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					491: {
						slidesPerView: 1.5,
						spaceBetween: 20
					},
					662: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					880: {
						slidesPerView: 2.6
					}
				}}
				pagination={{
					el: '.swiper_pagination_reviews_slider',
					clickable: true,
					bulletElement: 'div',
					bulletClass: 'swiper-bullets-reviews-slider',
					bulletActiveClass: 'swiper-bullets-reviews-slider-active'
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				{sliderData.map(slide => (
					<SwiperSlide className={styles.slider_item_wrap} key={slide.index}>
						<div className={styles.slider_item}>
							<div className={styles.reviewer_data}>
								<img
									className={styles.reviewer_avatar}
									src={slide.avatar}
									alt='Аватар ревьюера'
								/>
								<p className={styles.reviewer_name}>{slide.name}</p>
							</div>
							<div className={styles.city_review_block}>
								<p className={styles.city_review_title}>
									<span className={styles.city}>{slide.city}</span> - О ГОРОДЕ:
								</p>
								<p className={styles.reviewer_city_text}>{slide.reviewText}</p>
							</div>
							<div className={styles.review_gallery}>
								{slide.galleryImg.slice(0, countOfList).map((img, index) => (
									<img
										onClick={() => {
											setImages(slide.galleryImg)
										}}
										key={index}
										id={index}
										src={img}
										alt='Фото из отзыва'
									/>
								))}
								<div className={styles.gallery_overlay}>
									<p className={styles.gallery_overlay_text}>
										+ {slide.galleryImg.length - countOfList}
									</p>
								</div>
							</div>
							<div className={styles.review_info}>
								<p>{slide.reviewDate}</p>
								<p>{slide.comments} комментариев</p>
								<div className={styles.reviewer_btn_container}>
									<button className={styles.reviewer_btn}>
										<img
											className={styles.reviewer_btn__icon}
											src={likeIcon}
											alt='иконка лайка'
										/>
									</button>
									<p className={styles.reviewer_btn_text}>{slide.likes}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
				<Link className={styles.review_link} to={'*'}>
					Все отзывы
				</Link>
				<div className='swiper_pagination_reviews_slider'></div>
			</Swiper>
			{images && (
				<DetailGallery
					images={images}
					onClose={() => {
						setImages(undefined)
					}}
				/>
			)}
		</div>
	)
}

export default BarcelonaReviewsSlider
