var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
//确定数据库名称vuetest
var mongoUrl = 'mongodb://localhost:27017/vuetest';
var _db;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('mongodb have connected your project');
  _db = db.db('vuetest');

  app.post('/login', function (req, res, next) {
    _db.collection('user').find({ username: req.body.username, password: req.body.password }).toArray(function (error, respose) {
      if (respose[0].username==req.body.username & respose[0].password==req.body.password) {
        res.json({msg:'登录成功',username:req.body.username});
        app.get('/getUsername',function(aa,bb){
          bb.send(req.body.username)
        })
      } else if (!respose[0].username) {
        res.send('用户名不存在，请先注册！');
      } else if (respose[0].username & !respose[0].password) {
        res.send('密码错误请重新输入！')
      } else {
        res.send('404错误！')
      }
    })

  })

  app.post('/register', function (req, res, next) {
    _db.collection('user').find({ username: req.body.username, password: req.body.password }).toArray(function (error, respose) {

      if (respose.length == 0) {
        _db.collection('user').insertOne({ username: req.body.username, password: req.body.password }, function (err1, res1) {
          if (err) {
            res.send('注册失败')
          } else {
            res.send('注册成功')
          }
        })
      } else {
        res.send('用户已经存在！')
      }

    });


  })




  app.post('/createBook', function (req, res, next) {
    var request = req.body;
    //接受请求
    var collection = _db.collection('book');
    //创建名为book的数据表
    if (!request.name || !request.teacher || !request.introduction || !request.shopUrl || !request.pictureUrl) {
      res.send({ errcode: -1, errmsg: "参数不完整" });
      return;
    }
    //插入数据表
    collection.insert({ name: request.name, teacher: request.teacher, introduction: request.introduction, shopUrl: request.shopUrl, pictureUrl: request.pictureUrl }, function (err, ret) {
      if (err) {
        console.error(err);
        res.status(500).end();
      } else {
        res.send({ errcode: 0, errmsg: "ok" });
      }
    });
  });
  //监听端口8080
  app.listen(8080, function () {
    console.log('server is running at 8080');
  });
});