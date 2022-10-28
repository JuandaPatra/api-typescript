"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    register(req, res) {
        return res.send(req.body);
        // throw new Error("Method not implemented.")
    }
    login(req, res) {
        return res.send(req.body);
    }
}
exports.default = new AuthController();
