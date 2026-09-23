export interface BooksType {
    
    "id": number;
    "bookName": string;
    "author": string;
    "image": string;
    "review":string;
    "totalPages": number;
    "rating": number;
    "category": string;
    "tags":string[];
    "publisher": string;
    "yearOfPublishing": number;
  
}
export interface ParamsBooks{
  "id":string;
}