"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    let auth = false;
    if (auth) {
        next();
    }
    return res.status(400).send("unauthenticated");
};
exports.auth = auth;
