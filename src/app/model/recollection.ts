export interface Recollection {
  id: string;
  itemName: string;
  date: { seconds: number, nanoseconds: number };
  personName: string;
  image: string;
  returned: boolean;
}

const DEFAULT_RECOLLECTION: Recollection = {
  id: null,
  itemName: '',
  date: {
    seconds: 0,
    nanoseconds: 0
  },
  personName: '',
  image: '',
  returned: false,
};

export function createRecollection(recollection: Partial<Recollection> = {}): Recollection {
  return {
    ...DEFAULT_RECOLLECTION,
    ...recollection,
  };
}
