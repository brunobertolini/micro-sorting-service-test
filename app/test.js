import test from 'ava'

import books from './../data/books'
import sort from './../app/sorting'

test('order by title asc', t => {
	const result = sort(books, {title: 'asc'})
	const ids = result.map(book => book.id)

	t.deepEqual(ids, [1, 3, 4, 2])
})

test('order by: author asc and title desc', t => {
	const result = sort(books, {author: 'asc', title: 'desc'})
	const ids = result.map(book => book.id)

	t.deepEqual(ids, [3, 1, 2, 4])
})

test('order by: Edition desc, author desc, title asc', t => {
	const result = sort(books, {title: 'asc'})
	const ids = result.map(book => book.id)

	t.deepEqual(ids, [3, 2, 4, 1])
})

test('order by: null', t => {
	const error = t.throws(() => sort(books, null), Error)
	t.is(error.message, 'Err')
})

test('order by: empty', t => {
	const result = sort(books, {})
	t.is(result.length, 0)
})
