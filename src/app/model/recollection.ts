export interface Recollection {
  id: string;
  itemName: string;
  date: { seconds: number, nanoseconds: number };
  personName: string;
  image: string;
  returned: boolean;
}

export function createRecollection(
  id: string = null, itemName = '', date = { seconds: 0, nanoseconds: 0 }, personName = '', image = '', returned = false
): Recollection {
  return {
    id,
    itemName,
    date,
    personName,
    image,
    returned,
  };
}
