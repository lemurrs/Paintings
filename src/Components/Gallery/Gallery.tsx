import c from './Gallery.module.scss'
import { IAuthor, ILocation, IPainting } from '../../interfaces'
import PaintingCard from '../PaintingCard/PaintingCard'
import React from 'react'

type Props = {
	data: IPainting[]
	authorsData: IAuthor[]
	locationsData: ILocation[]
}

const Gallery: React.FC<Props> = ({ data, locationsData, authorsData }) => {
	return (
		<div className={c.Gallery}>
			{data?.map((painting: IPainting, index) => {
				//get authorName by authorId from each painting
				const authorName = authorsData?.find(
					author => author.id === painting.authorId
				)?.name

				//get locationName by locationId from each painting
				const locationName = locationsData?.find(
					location => location.id === painting.locationId
				)?.location

				return (
					<PaintingCard
						key={index}
						painting={painting}
						authorName={authorName!}
						locationName={locationName!}
					/>
				)
			})}
		</div>
	)
}
export default React.memo(Gallery)
