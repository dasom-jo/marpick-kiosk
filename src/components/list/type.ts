export interface foodType {
    id:any;
    price: number;
    translation: string;
}
export interface FoodDictionary {
    [key: string]: foodType;
}
