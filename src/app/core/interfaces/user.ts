export interface User {
  id?: any;
  username: string;
  lastname?: string;
  firstname?: string;
  email: string;
  password: string;
  phone?: string;
  adresse?: string;
  photo?: string;
  sexe?: string;
  Profession?: string;
  date_de_naiss?: Date;
  isActive?: boolean;
  token?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
