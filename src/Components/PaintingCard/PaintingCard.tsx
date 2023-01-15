import React from 'react'
import c from './PaintingCard.module.scss'
import { IPainting } from '../../interfaces'
import { BASE_URL } from '../../constants'

type Props = {
	painting: IPainting
	authorName: string
	locationName: string
}

const PaintingCard: React.FC<Props> = ({
	painting,
	authorName,
	locationName
}) => {
	return (
		<div className={c.PaintingCard}>
			<img src={BASE_URL + painting.imageUrl} alt='painting' />
			<div className={c.PaintingCard__info}>
				<h3 className={c.PaintingCard__title}>{painting.name}</h3>
				<p>
					<b>Author:</b> {authorName}
				</p>
				<p>
					<b>Created:</b> {painting.created}
				</p>
				<p>
					<b>Location:</b> {locationName}
				</p>
			</div>
		</div>
	)
}
export default React.memo(PaintingCard)
