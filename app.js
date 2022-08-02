const express = require("express");

const app = express();

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send('<iframe src="https://hellocustomer.kb.ap-northeast-2.aws.elastic-cloud.com:9243/app/dashboards?auth_provider_hint=anonymous1#/view/0112f870-a37e-11ec-87af-dd68cc767fa7?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))?auth_provider_hint=anonymous1" height="600" width="800"></iframe>');
});

//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});