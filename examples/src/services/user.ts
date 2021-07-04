export const base: ServiceRes = {
  name: "user",

  methods: {
    logger(a: string) {
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

export default function UserService(this: Li): ServiceRes {
  return base;
}