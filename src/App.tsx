import React, { useEffect } from 'react'
import './App.scss'
import HomePage from './Pages/HomePage/HomePage'
import Header from './Components/Header/Header'
import { useSelector } from 'react-redux'
import { appStateType } from './store/store'

function App() {
	const isDarkTheme = useSelector(
		(state: appStateType) => state.HomePage.isDarkTheme
	)
	const theme = isDarkTheme ? 'dark' : 'light'

	useEffect(() => {
		document.body.classList.add(theme)
		return () => {
			document.body.classList.remove(theme)
		}
	}, [theme])

	return (
		<div className={'AppContainer'}>
			<Header />
			<HomePage />
		</div>
	)
}

export default App
