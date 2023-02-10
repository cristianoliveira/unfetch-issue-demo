import unfetch from "unfetch";

unfetch("https://cat-fact.herokuapp.com/facts")
  .then((r) => r.json())
  .then(console.log);
