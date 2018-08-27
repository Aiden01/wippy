import test from 'ava'
import { reverseMe } from '../src/reverse_me'

test('returns reversed string', t => {
    t.is(reverseMe('hello world'), 'dlrow olleh')
})