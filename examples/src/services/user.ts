export default function UserService(this: Li): ServiceRes {
  let self = this;
  return {
    name: "user",
    path: "/user",
  
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
      start:() => {
        console.log("started");
      }
    }
  };
}