import jwt from "jsonwebtoken"
import {settingDotEnvSecret} from "../config/dotenv.js"

const {secret} = settingDotEnvSecret()

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign( {payload}, secret, {expiresIn: "2h"}, (err, token) => {
            if (err) reject(err);
                resolve(token);
            });
         }); 

    };



