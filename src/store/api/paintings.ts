import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IAuthor, ILocation, IPainting } from '../../interfaces'
import { BASE_URL } from '../../constants'

const removeEmptyKeys = (obj: object) => {
	return Object.fromEntries(
		Object.entries(obj).filter(([_, value]) => value !== '')
	)
}

export const paintingApi = createApi({
	reducerPath: 'paintingApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getAllPaintings: builder.query<IPainting[], string[]>({
			query: ([
				page = 1,
				name = '',
				authorId = '',
				locationId = '',
				created_gte = '',
				created_lte = ''
			]) => {
				let filterData = {
					q: name,
					authorId: authorId,
					created_gte: created_gte,
					created_lte: created_lte,
					locationId: locationId
				}
				return {
					url: `/paintings`,
					params: {
						_page: page,
						...removeEmptyKeys(filterData),
						_limit: 12
					}
				}
			}
		}),
		getAllAuthors: builder.query<IAuthor[], null>({
			query: () => ({
				url: `/authors`
			})
		}),

		getAllLocations: builder.query<ILocation[], null>({
			query: () => `/locations`
		})
	})
})
export const {
	useGetAllLocationsQuery,
	useGetAllAuthorsQuery,
	useGetAllPaintingsQuery
} = paintingApi
