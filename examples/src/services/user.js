"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UserService() {
    let self = this;
    return {
        name: "user",
        path: "/user",
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
            start: () => {
                console.log("started");
            }
        }
    };
}
exports.default = UserService;
//# sourceMappingURL=user.js.map