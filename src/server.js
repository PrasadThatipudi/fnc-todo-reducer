import createApp from "./app.js";

const main = () => {
  const todos = [
    { id: 1, title: "Shopping", tasks: [] },
    { id: 2, title: "Work", tasks: [] },
  ];

  const app = createApp({ todos });

  Deno.serve({ port: 8000 }, app.fetch);
};

main();
