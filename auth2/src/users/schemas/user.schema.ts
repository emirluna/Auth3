//import * as mongoose from 'mongoose';
//import mongoose = require('mongoose');
import * as passportLocalMongoose from 'passport-local-mongoose';
import { Document, Schema, Model, model } from 'mongoose';

export const userSchema: Schema = new Schema({
//export const UserSchema: Schema = new Schema({
//export const UserSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    password: String,
    role: String,
});
userSchema.plugin(passportLocalMongoose);