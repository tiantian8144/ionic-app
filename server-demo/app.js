/**
 * Created by web-01 on 2018/2/9.
 */

const express = require('express');
const bodyParser = require('body-parser');
const mysql=require('mysql');//1.引入sql模块

//2.创建数据库连接池
let pool=mysql.createPool({
    // host:'127.0.0.1',
    // port:3306,    默认是本机，默认端口号可以不写
    // database:'db',   sql语句里指定数据库可以不写
    user:'root',
    // password:'',   无密码可以不写
    // connectionLimit:10  默认是10 可以不写，其他要写
});

let app = new express();
app.listen(3000);
// Express 中间件 middleware 的配置
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/signUp', (req, res) => {
    // console.log(`user:`,user);
  let user=req.body.user;
  // todo check email
    let sql="SELECT * FROM db.user WHERE email=?";
    pool.query(sql,[user.email],(err,results)=>{
        if(results.length===1){
            res.send({"status":"exist"});
        }else{
            // todo MySQL
            //定义sql语句
            sql="INSERT INTO db.user VALUE(NULL,?,?,?,?,?,?)";
            //执行sql
            //以下方式可以简化
            // pool.getConnection((err,connection)=>{
            //   if(err) throw err;
            //   connection.query(sql,[],(err,results,fields)=>{
            //     //....
            //   })
            // });
            pool.query(sql,[
                user.email,
                user.username,
                user.password,
                user.gender,
                user.age,
                user.city
            ],(err,results,fields)=>{
                // console.log(fields);
                if(err) throw err;
                if(results.affectedRows===1){
                    //sign up success
                    res.send({"status":"OK"});
                }else{
                    //sign up failed
                    res.send({"status":"err"})
                }
            });
        }
    })



});

