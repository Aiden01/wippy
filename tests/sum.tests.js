import test from 'ava'
import { getSum } from '../src/sum'

test('get the sum of the numbers', t => {
    t.is(getSum(1, 2, 3), 6)
})