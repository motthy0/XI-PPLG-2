import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const units = ["/Rating/1.png", "/Rating/2.png", "/Rating/3.png", "/Rating/4.png", "/Rating/5.png"]

const db = getFirestore()

export default function Rating() {
	const [value, setValue] = React.useState(() => {
		const lastRating = localStorage.getItem("lastRating")
		return lastRating ? parseFloat(lastRating) : 5.0
	})

	const [remainingRatings, setRemainingRatings] = React.useState(2)
	const [isSubmitting, setIsSubmitting] = React.useState(false)

	React.useEffect(() => {
		const ratingsToday = localStorage.getItem("ratingsToday")
		if (ratingsToday) {
			const remaining = 2 - parseInt(ratingsToday, 10)
			setRemainingRatings(remaining > 0 ? remaining : 0)
		}
	}, [])

	const handleChange = (event, newValue) => {
		if (typeof newValue === "number" && remainingRatings > 0) {
			setValue(newValue)
		}
	}

	const handleSliderChange = async (event, newValue) => {
		if (typeof newValue === "number" && remainingRatings > 0 && !isSubmitting) {
			setIsSubmitting(true)
			setValue(newValue)

			setTimeout(async () => {
				try {
					const docRef = await addDoc(collection(db, "ratings"), {
						value: newValue,
						timestamp: new Date(),
					})
					console.log("Document written with ID: ", docRef.id)

					const ratingsToday = localStorage.getItem("ratingsToday")
					const newRatingsToday = (parseInt(ratingsToday, 10) || 0) + 1
					localStorage.setItem("ratingsToday", newRatingsToday.toString())
					setRemainingRatings(2 - newRatingsToday)
				} catch (e) {
					console.error("Error adding document: ", e)
				} finally {
					setIsSubmitting(false)
				}
			}, 2000) 
		}
	}

	const imgIndex = Math.min(Math.floor(value / 2), units.length - 1) 

	return (
		<Box sx={{ width: 307 }}>
			<Typography id="FixTextPoppins" gutterBottom>
				<div className="flex justify-between text-white relative top-3">
					<div className="font-bold text-xs">RATE US</div>
					<div className="font-bold text-xs">{value.toFixed(1)}</div>
				</div>
			</Typography>
			<div className="flex justify-center mb-3">
				<img
					src={units[imgIndex]}
					alt={`Rating ${imgIndex + 1}`}
					className="w-10 h-10"
					id="ImgRating"
				/>
			</div>
			<Slider
				value={value}
				min={0}
				step={0.1}
				max={10}
				color="secondary"
				valueLabelDisplay="off"
				onChange={handleChange}
				onChangeCommitted={handleSliderChange}
				disabled={remainingRatings === 0 || isSubmitting}
				sx={{
					"& .MuiSlider-thumb": {
						height: "1.5rem",
						width: "1.5rem",
						border: "none",
						backgroundColor: "white",
						boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
						"&:hover, &.Mui-focusVisible": {
							boxShadow: "0 0 15px rgba(255, 255, 255, 1)",
						},
					},
					"& .MuiSlider-valueLabel": {
						backgroundColor: "transparent",
					},
				}}
			/>
		</Box>
	)
}
