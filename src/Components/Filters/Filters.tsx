import React, { useCallback, useState } from 'react'
import c from './Filters.module.scss'
import { Select } from 'fwt-internship-uikit'
import css from 'fwt-internship-uikit/dist/index.css'
import Input from './Input/Input'
import Range from './Range/Range'
import Delete from '../../Assets/svg/Delete.svg'
import { IAuthor, ILocation } from '../../interfaces'

type Props = {
	setFilterName: (e: string) => void
	isDarkTheme: boolean
	setAuthorId: (a: string) => void
	setLocationId: (a: string) => void
	setCreatedFrom: (a: string) => void
	setCreatedTo: (a: string) => void
	locationsData: ILocation[]
	authorsData: IAuthor[]
}
const Filters: React.FC<Props> = ({
	setFilterName,
	isDarkTheme,
	setAuthorId,
	setLocationId,
	setCreatedFrom,
	setCreatedTo,
	locationsData,
	authorsData
}) => {
	const [authorName, setAuthorName] = useState('')
	const [locationName, setLocationName] = useState('')

	//changed key name from 'location' to 'name' so we can use this data in Select
	const locationsDataWithName = locationsData?.map(obj => {
		return {
			id: obj.id,
			name: obj.location
		}
	})

	const handleAuthorName = useCallback(
		(value: string) => {
			if (!value) {
				setAuthorName('')
				setAuthorId('')
				return 0
			}
			setAuthorName(value)
			setAuthorId(authorsData!.filter(el => el.name === value)[0].id.toString())
		},
		[authorsData, setAuthorId]
	)
	const handleLocationName = useCallback(
		(value: string) => {
			if (!value) {
				setLocationName('')
				setLocationId('')
				return 0
			}
			setLocationName(value)
			setLocationId(
				locationsDataWithName!.filter(el => el.name === value)[0].id.toString()
			)
		},
		[locationsDataWithName, setLocationId]
	)
	return (
		<div className={c.Filters}>
			<Input onChange={setFilterName} isDarkTheme={isDarkTheme} />
			<div className={c.Filters__selectWrapper}>
				<Select
					disabled={!authorsData}
					options={authorsData!}
					isDarkTheme={isDarkTheme}
					value={!authorName ? 'Author' : authorName}
					onChange={handleAuthorName}
				/>
				<img
					src={Delete}
					alt={'DeleteButton'}
					onClick={() => {
						handleAuthorName('')
					}}
					className={!isDarkTheme ? c.svgLight : ''}
					style={{ display: authorName ? '' : 'none' }}
				/>
			</div>
			<div className={c.Filters__selectWrapper}>
				<Select
					className={css.Select}
					disabled={!locationsDataWithName}
					options={locationsDataWithName!}
					isDarkTheme={isDarkTheme}
					value={!locationName ? 'Location' : locationName}
					onChange={handleLocationName}
				/>
				<img
					src={Delete}
					alt={'DeleteButton'}
					onClick={() => {
						handleLocationName('')
					}}
					className={!isDarkTheme ? c.svgLight : ''}
					style={{ display: locationName ? '' : 'none' }}
				/>
			</div>
			<Range
				isDarkTheme={isDarkTheme}
				setCreatedFrom={setCreatedFrom}
				setCreatedTo={setCreatedTo}
			/>
		</div>
	)
}
export default React.memo(Filters)
