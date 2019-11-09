		//bg
		TweenMax.to(".bg", 2, {
			width: "100vw",
			ease: Expo.easeInOut
		})

		// navbar - (logo - ham menu)
		TweenMax.from(".navbar", 1.5, {
			delay: 3.5,
			opacity: 0,
			y: 25,
			ease: Expo.easeInOut
		})

		// first name
		TweenMax.from("section div h1", 1.5, {
			delay: 1.6,
			opacity: 0,
			y: 50,
			ease: Expo.easeInOut
		})

                // last name
		TweenMax.from("section div h2", 1.5, {
			delay: 2,
			opacity: 0,
			y: 50,
			ease: Expo.easeInOut
		})
                
                // description
		TweenMax.from("section h3", 1.5, {
			delay: 3,
			opacity: 0,
			y: 50,
			ease: Expo.snap
		})

		//works-text
		TweenMax.from(".works h1", 1.5, {
			delay: 3,
			opacity: 0,
			y: 50,
			ease: Expo.snap
		})

		// resume-box
		TweenMax.from(".resume", 1.5, {
			delay: 3.5,
			opacity: 0,
			y: 25,
			ease: Expo.easeInOut
		})
