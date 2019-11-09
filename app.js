		//bg
		TweenMax.to(".bg", 2, {
			width: "100vw",
			ease: Expo.easeInOut
		})

		// navbar
		TweenMax.from(".navbar", 1.5, {
			delay: 3.5,
			opacity: 0,
			y: 25,
			ease: Expo.easeInOut
		})

		// TEXT
		TweenMax.from("section div h1", 1.5, {
			delay: 1.6,
			opacity: 0,
			y: 50,
			ease: Expo.easeInOut
		})

		TweenMax.from("section div h2", 1.5, {
			delay: 2,
			opacity: 0,
			y: 50,
			ease: Expo.easeInOut
		})

		TweenMax.from("section h3", 1.5, {
			delay: 3,
			opacity: 0,
			y: 50,
			ease: Expo.snap
		})

		TweenMax.from(".works h1 ", 1.5, {
			delay: 3,
			opacity: 0,
			y: 50,
			ease: Expo.snap
		})
