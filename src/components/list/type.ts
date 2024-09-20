export interface foodType {
  id: any;
  price: any;
  translation: string;
}
export interface FoodDictionary {
  [key: string]: foodType;
}
