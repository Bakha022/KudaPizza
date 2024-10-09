import React, { useEffect, useState } from 'react'

const TimeLeft = () => {
	const [timeLeft, setTimeLeft] = useState(24 * 60)

	useEffect(() => {
		// Har 1 soniyada qayta ishga tushadigan intervalni o'rnatamiz
		const timer = setInterval(() => {
			setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0))
		}, 1000)

		// Komponent unmounted bo'lganda intervalni tozalash
		return () => clearInterval(timer)
	}, [])

	const formatTime = seconds => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
			.toString()
			.padStart(2, '0')}`
	}

	return <>{formatTime(timeLeft)}</>
}

export default TimeLeft
