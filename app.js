const express = require("express");

const app = express();

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});