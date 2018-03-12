const normalize = item =>
	typeof item === 'string' ? item.toLowerCase() : item

const compare = (a, b) =>
	normalize(a) < normalize(b) ? -1 : normalize(a) > normalize(b) ? 1 : 0

const sortBy = props => {
	const prop = props.shift()

	return (a, b) => {
		const sort = prop.reverse ? compare(b[prop.name], a[prop.name]) : compare(a[prop.name], b[prop.name])
		return sort === 0 && props.length > 0 ? sortBy(props) : sort
	}
}

const sorting = (data, props) => {
	if (!props) {
		throw new Error('Err')
	} else if (props.length === 0) {
		return []
	} else {
		return data.sort(sortBy(props))
	}
}
module.exports = sorting
