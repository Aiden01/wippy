import test from 'ava'
import numbers from '../src/get_the_numbers'

if(!numbers.hasOwnProperty('getTheNumbers')) {
    throw new Error('Hum.. La fonction getTheNumbers n\'existe pas. Veuillez vérifier le nom')
}

test('get all the numbers of a string', t => {
    t.deepEqual(numbers.getTheNumbers('x56gs5k7'), ['5', '6', '5', '7'])
    t.deepEqual(numbers.getTheNumbers('x56dg8gs5k7'), ['5', '6', '8', '5', '7'])
})