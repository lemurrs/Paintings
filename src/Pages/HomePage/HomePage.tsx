import React, { useState } from 'react'
import c from './HomePage.module.scss'
import css from 'fwt-internship-uikit/dist/index.css'
import {
	useGetAllAuthorsQuery,
	useGetAllLocationsQuery,
	useGetAllPaintingsQuery
} from '../../store/api/paintings'
import Filters from '../../Components/Filters/Filters'
import { Pagination } from 'fwt-internship-uikit'
import { useSelector } from 'react-redux'
import { appStateType } from '../../store/store'
import Gallery from '../../Components/Gallery/Gallery'

const HomePage = () => {
	const isDarkTheme = useSelector(
		(state: appStateType) => state.HomePage.isDarkTheme
	)
	const [filterName, setFilterName] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [authorId, setAuthorId] = useState(0)
	const [locationId, setLocationId] = useState(0)
	const [createdFrom, setCreatedFrom] = useState('')
	const [createdTo, setCreatedTo] = useState('')

	const { data, isLoading } = useGetAllPaintingsQuery([
		currentPage,
		filterName,
		authorId,
		locationId,
		createdFrom,
		createdTo
	])
	const { data: authorsData } = useGetAllAuthorsQuery(null)
	const { data: locationsData } = useGetAllLocationsQuery(null)
	if (isLoading) return <h1>Loading data...</h1>
	return (
		<div className={c.HomePage}>
			<Filters
				setCurrentPage={setCurrentPage}
				setFilterName={setFilterName}
				isDarkTheme={isDarkTheme}
				setAuthorId={setAuthorId}
				setLocationId={setLocationId}
				setCreatedFrom={setCreatedFrom}
				setCreatedTo={setCreatedTo}
				authorsData={authorsData!}
				locationsData={locationsData!}
			/>
			<Gallery
				authorsData={authorsData!}
				data={data!}
				locationsData={locationsData!}
			/>
			<Pagination
				className={css.Pagination}
				isDarkTheme={isDarkTheme}
				pagesAmount={3}
				currentPage={currentPage}
				onChange={setCurrentPage}
			/>
		</div>
	)
}
export default React.memo(HomePage)
