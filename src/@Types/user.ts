export interface IGetSingleUser {
  id: number;
}

export interface ICreateUser {
  firstname: string;
  lastName: string;
  age: number;
}

export interface IUpdateUser {
  id: number;
  firstName?: string;
  lastName?: string;
  age?: number;
}

export interface IRemoveUser {
  id: number;
}
