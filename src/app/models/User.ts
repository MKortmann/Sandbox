export interface User {
  firstName: String;
  lastName: String;
  age?: Number;
  address?: {
    street?: String;
    city?: String;
    state?: String;
  };
  isActive?: boolean;
  balance?: number;
  registered?: any;
  hide?: boolean;
}
