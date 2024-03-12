interface Address {
  street: string;
  city: string;
  state: string;
}

export type User = {
  id: number;
  name: string;
  address: Address;
};
