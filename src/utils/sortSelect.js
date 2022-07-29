// Options for select condition
export const conditions = [
  {
    id: 0,
    text: 'Includes',
    value: 'includes',
  },
  {
    id: 1,
    text: 'Equal',
    value: 'equal',
  },
  {
    id: 2,
    text: 'More',
    value: 'more',
  },
  {
    id: 3,
    text: 'Less',
    value: 'less',
  },
]

// Object to find query parameters
export const filters = {
  id: {
    equal: '',
    includes: '',
    more: '',
    less: '',
  },
  title: {
    equal: 'title',
    includes: 'search',
    more: '',
    less: '',
  },
  quantity: {
    equal: 'quantity',
    includes: '',
    more: 'qm',
    less: 'ql',
  },
  distance: {
    equal: 'distance',
    includes: '',
    more: 'dm',
    less: 'dl',
  },
}


// options for select sort types
export const sortTypes = [
  {
    id: 0,
    text: 'Select sort',
    value: 'id',
  },
  {
    id: 1,
    text: 'Title',
    value: 'title',
  },
  {
    id: 2,
    text: 'Quantity',
    value: 'quantity',
  },
  {
    id: 3,
    text: 'Distance',
    value: 'distance',
  },
]
