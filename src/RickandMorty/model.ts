export interface Character {
    name: string;
    status: string;
    imageUrl: string;
    image: string;
    id: string;
}
export interface Response{
    results: Array<Character>;
}