"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, nama: "Joko" },
    { id: 2, nama: "Moko" },
    { id: 3, nama: "Koko" },
    { id: 4, nama: "Soko" },
];
class UserController {
    index(req, res) {
        return res.send(data);
        // throw new Error("Method not implemented.")
    }
    create(req, res) {
        const { id, nama } = req.body;
        data.push({
            id,
            nama
        });
        return res.send("data berhasil ditambahkan");
        // throw new Error("Method not implemented.")
    }
    show(req, res) {
        const { id } = req.params;
        let show = data.find(item => item.id == id);
        return res.send(show);
        throw new Error("Method not implemented.");
    }
    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        let update = data.find(item => item.id == id);
        // console.log(update)
        update.nama = nama;
        return res.send("data berhasil diperbaharui");
        // throw new Error("Method not implemented.")
    }
    delete(req, res) {
        const { id } = req.params;
        // let oldData = data
        let deleteData = data.filter(item => item.id != id);
        return res.send(deleteData);
        // throw new Error("Method not implemented.")
    }
}
exports.default = new UserController();
