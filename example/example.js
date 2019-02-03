import tablature from '../src'

const DATA = [
  {
    name: 'hello',
    when: 'yesterday',
  },
  {
    name: 'world',
    when: 'now',
  },
]

const res = tablature({
  keys: ['name', 'when'],
  data: DATA,
  centerValues: ['when'],
  centerHeadings: ['when'],
  headings: {
    name: 'Name',
    when: 'When',
  },
})
console.log(res)