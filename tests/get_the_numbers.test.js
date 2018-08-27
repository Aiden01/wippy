import test from 'ava'
import { getTheNumbers } from '../src/get_the_numbers'

test('get all the numbers of a string', t => {
    t.deepEqual(getTheNumbers('x56gs5k7'), ['5', '6', '5', '7'])
    t.deepEqual(getTheNumbers('x56dg8gs5k7'), ['5', '6', '8', '5', '7'])
})