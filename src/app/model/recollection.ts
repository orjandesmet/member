export interface Recollection {
  id: string;
  itemName: string;
  date: { seconds: number, nanoseconds: number };
  personName: string;
  image: string;
  returned: boolean;
}
