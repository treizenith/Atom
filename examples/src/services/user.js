"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
exports.base = {
    name: "user",
    methods: {
        logger(a) {
            console.log(a);
            return "hellos";
        }
    },
    hooks: {
        stop() {
            console.log("stopped");
        },
        start() {
            console.log("started");
        }
    }
};
function UserService() {
    return exports.base;
}
exports.default = UserService;
//# sourceMappingURL=user.js.map