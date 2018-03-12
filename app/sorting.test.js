import test from 'ava'

import books from './../data/books'
import sorting from './../app/sorting'

test('order by title asc', t => {
	const props = [
		{name: 'title'}
	]

	const result = sorting(books, props)
	const ids = result.map(book => book.id)

	t.deepEqual(ids, [1, 3, 4, 2])
})

test('order by: author asc and title desc', t => {
	const props = [
		{name: 'author'},
		{name: 'title', reverse: true}
	]

	const result = sorting(books, props)
	const ids = result.map(book => book.id)

	t.deepEqual(ids, [3, 1, 2, 4])
})

test('order by: Edition desc, author desc, title asc', t => {
	const props = [
		{name: 'edition', reverse: true},
		{name: 'author', reverse: true},
		{name: 'title'}
	]

	const result = sorting(books, props)
	const ids = result.map(book => book.id)

	t.deepEqual(ids, [3, 2, 4, 1])
})

test('order by: null', t => {
	const error = t.throws(() => sorting(books, null), Error)
	t.is(error.message, 'Err')
})

test('order by: empty', t => {
	const result = sorting(books, [])
	t.is(result.length, 0)
})
