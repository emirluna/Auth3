import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    password: String,
    phone: Number,
    status: Number,
    photo: String,
    role: String,
    enterprise_id: String,
    

});
UserSchema.plugin(passportLocalMongoose);
/**
 * {
 * "_id":"5cf84e4aa11d0e1368001621",
 * "name":"Emir",
 * "last_name":"Luna",
 * "phone":"2481602007",
 * "email":"emir.luna@outlook.com",
 * "password":"$2y$10$YsC1a9qnhob6pgiPeoFMLuekn4nMAs/aDFDJeCF2swlcMT6BNlfQm",
 * "status":1,
 * "photo":"img/porfile/5cf84e4aa11d0e1368001620",
 * "role":"admin",
 * "enterprise_id":"5cf84e4aa11d0e1368001620",
 * "address":{"country":"México","state":"Tlaxcala","city":"Nativitas","town":"Atoyatenco","street":"Canal San Ignacio","number":10,"zipcode":90718},
 * "driver":{"turn":1,"license_number":1111111,"license_type":"A","espiration_date":"05-06-2019 23:20:42","bank":"Banorte","number_acount":"111111111111","clabe":"123123121","currency":"usd","resource":11111},
 * "updated_at":"2019-06-05T23:20:42.000Z",
 * "created_at":"2019-06-05T23:20:42.000Z"}
 * 
 * 
 * 
*/