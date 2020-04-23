export interface User {
  firstName: String;
  lastName: String;
  age?: Number;
  address?: {
    street?: String;
    city?: String;
    state?: String;
  };
  image?: string;
  isActive?: boolean;
  balance?: number;
  registered?: any;
}
