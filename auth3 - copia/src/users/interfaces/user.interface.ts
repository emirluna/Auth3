import { Document, PassportLocalDocument } from 'mongoose';

export interface IUser extends PassportLocalDocument {
    readonly name: string;
    readonly last_name: string;
    readonly email: string;
    readonly password: string;
}