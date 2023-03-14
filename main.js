
const justFood = (people) => {
    return `caterin od Just Food pro ${people} lidí za 5 000 Kč`
}

const yourMama = (people) => {
    return `caterin od Your Mama pro ${people} lidí za 15 0000 Kč`
}

const flavourHaven = (people) => {
    return `caterin od Flavour Haven pro ${people} lidí za 50 000 Kč`
}

const createEvent = (event, count, volanaFunkce) => {
    return `Událost ${event} s ${volanaFunkce(count)}`
}

document.body.innerHTML += createEvent(
	'Inaugurace prezidenta',
	100,
	flavourHaven
)