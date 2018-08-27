import { Recollection } from '../../model/recollection';

export const MOCK_RECOLLECTIONS: Readonly<Recollection>[] = [
  {
    id: '1',
    itemName: 'Vacation Pictures',
    date: 2,
    image: 'none',
    personName: 'Sleepy Gary',
    returned: false,
  },
  {
    id: '2',
    itemName: 'R2D2 Coin Collection',
    date: 2,
    image: 'none',
    personName: 'Doofus Rick',
    returned: true,
  },
  {
    id: '3',
    itemName: 'Car keys',
    date: 2,
    image: 'none',
    personName: 'Summer',
    returned: false,
  }
];
