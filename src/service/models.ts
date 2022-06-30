export interface Post {
  id: string;
  owner: Author;
  text: string;
}
export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
}
