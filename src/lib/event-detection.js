function eventDetector(events) {
	const el = document.createElement('fakeelement');
	const eventTests = Object.keys(events);
	let eventName;

	for (let index = 0; index < eventTests.length; index += 1) {
		if (el.style[eventTests[index]] !== undefined) {
			eventName = events[eventTests[index]];
		}
	}

	return eventName;
}

function whichTransitionEnd() {
	return eventDetector({
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
	});
}

function whichAnimationStart() {
	return eventDetector({
		animation: 'animationstart',
		OAnimation: 'oAnimationStart',
		MozAnimation: 'animationstart',
		WebkitAnimation: 'webkitAnimationStart',
	});
}

function whichAnimationEnd() {
	return eventDetector({
		animation: 'animationend',
		OAnimation: 'oAnimationEnd',
		MozAnimation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd',
	});
}

function whichAnimationIteration() {
	return eventDetector({
		animation: 'animationiteration',
		OAnimation: 'oAnimationIteration',
		MozAnimation: 'animationiteration',
		WebkitAnimation: 'webkitAnimationIteration',
	});
}

export { whichTransitionEnd };
export { whichAnimationStart };
export { whichAnimationEnd };
export { whichAnimationIteration };
