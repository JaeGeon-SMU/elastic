const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use('/',express.static('./public'));
app.use('/menu1',express.static('./public'));

const mainRouter = express.Router();
const handleMain = (req,res) => {
  return res.sendFile(__dirname + '/main.html');
}
mainRouter.get("/",handleMain);


const menu1Router = express.Router();
const handleMenu1 = (req,res) => {
  return res.sendFile(__dirname + '/qq.html');
}
menu1Router.get("/menu2",handleMenu1);

const menu2Router = express.Router();
const handleMenu2 = (req,res) => res.send("menu2");
menu2Router.get("/",handleMenu2);

const menu3Router = express.Router();
const handleMenu3 = (req,res) => res.send("menu3");
menu3Router.get("/",handleMenu3);

app.use("/",mainRouter);
app.use("/menu1",menu1Router);
app.use("/menu2",menu2Router);
app.use("/menu3",menu3Router);







//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});