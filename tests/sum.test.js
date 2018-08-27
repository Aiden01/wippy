import test from 'ava'
import { getSum } from '../src/sum'

test('get the sum of the numbers', t => {
    t.is(getSum(1, 2, 3), 6)
    t.is(getSum(1, 2), 3)
    t.is(getSum(5, 5), 10)
    t.is(getSum(10, 20, 5, 10), 45)
})