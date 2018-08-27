import test from 'ava'
import { capitalizeMe } from '../src/capitalize_me'

test('returns capitalized string', t => {
    t.is(capitalizeMe('hello world'), 'HELLO WORLD')
})
