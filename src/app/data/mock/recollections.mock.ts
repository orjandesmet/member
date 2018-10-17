import { Recollection } from '../../model/recollection';

export const MOCK_RECOLLECTIONS: Readonly<Recollection>[] = [
  {
    id: '1',
    itemName: 'Vacation Pictures',
    date: { seconds: 1535320800 , nanoseconds: 0 },
    image: '',
    personName: 'Sleepy Gary',
    returned: false,
  },
  {
    id: '2',
    itemName: 'R2D2 Coin Collection',
    date: { seconds: 1535320800, nanoseconds: 0 },
    image: '',
    personName: 'Doofus Rick',
    returned: true,
  },
  {
    id: '3',
    itemName: 'Car keys',
    date: { seconds: 1535320800, nanoseconds: 0 },
    image: '',
    personName: 'Summer?',
    returned: false,
  }
];
