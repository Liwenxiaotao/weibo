/**
 * Created by taotao on 2017/5/21.
 */
var express=require("express");
var router=require("./router/router.js");
var app=express();
app.use(express.static("./app"));
app.post("/doRegister",router.doRegister);
app.post("/doLogin",router.doLogin);
app.get("/getUserInfo",router.getUserInfo);
app.post("/upHeadImg",router.upHeadImg);
app.get("/cropHeadImg",router.cropHeadImg);
app.post("/postInfo",router.postInfo);
app.post("/getAllTalk",router.getAllTalk);


app.listen(1111);