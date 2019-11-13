// app.js

const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const identityKey = 'skey';
const md5 = 'md5';

const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 数据库连接
function getDb() {
    const mysqlHost = '49.235.240.195/3306';
    const mysqlUser = 'meirou';
    const mysqlPwd = 'meirou123';
    const mysqlDb = 'meirou';
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: '49.235.240.195',
        user: 'meirou', //你的数据库账号
        password: 'meirou123', //你的数据库密码
        database: 'meirou', //你的数据库名
        port: 3306
    });
    conn.connect();
    return conn;
}

// 登陆判断
function findUser(name, password) {
    return new Promise((resolve, reject) => {
        const db = getDb();
        var isTrue = false;
        db.query('select * from userlist;', null, function (error, result) {
            result.find(function (item) {
                if (item.name === name && item.password === password) isTrue = true;
            });
            if (isTrue) resolve(1);
            resolve(2);
        })
    })
};
// 登录态
app.use(session({
    name: identityKey,
    secret: 'chyingp', // 用来对session id相关的cookie进行签名
    store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 1000 * 1000 // 有效期，单位是毫秒
    }
}));
app.use(body_parser.urlencoded({
    extended: false
}));
// 获取所有账号
app.get('/logon', function (req, res) {
    const db = getDb();
    db.query('select * from userlist;', null, function (error, result) {
        const obj = {
            status: 0,
            data: result.map(item => item.name)
        }
        res.json(obj);
    })
});
// 请求登录态
app.get('/logins', function (req, res) {
    if (req.query.isTrue === 'true') {
        req.session.loginUser = req.query.name;
        const db = getDb();
        db.query('INSERT INTO userlist(name,password) VALUES (' + req.query.name + ',' + '123456' + ');', null, function (error, result) {
            console.log('INSERT INTO userlist(name,password) VALUES (' + req.query.name + ',' + '123456' + ');')

            console.log('用户创建成功');
        })
        return res.json({
            code: 1,
            msg: '登陆成功'
        });
    } else {
        return res.json({
            code: 2,
            msg: '登陆失败'
        });
    }
})
// 请求登陆
app.post('/login', function (req, res) {
    var sess = req.session;
    if (req.body.type === 'phone') {
        const db = getDb();
        db.query('select * from userlist;', null, function (error, result) {
            if (result.some(item => item.name === req.body.name)) {
                return res.json({
                    code: 2,
                    msg: '账户已存在,请登陆'
                });
            }
            return res.json({
                code: 1,
                msg: '9945'
            });
        })
    } else {
        const user = findUser(req.body.name, req.body.password).then(resule => {
            if (resule === 1) {
                req.session.regenerate(function (err) {
                    if (err) {
                        return res.json({
                            code: 2,
                            msg: '登录失败'
                        });
                    }
                    req.session.loginUser = user.name;
                    res.json({
                        code: 0,
                        msg: '登录成功'
                    });
                });
            } else {
                res.json({
                    code: 1,
                    msg: '账号或密码错误'
                });
            }
        }).catch(() => {});
    }
});
// 退出登录
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            res.json({
                code: 2,
                msg: '退出登录失败'
            });
            return;
        }
        res.clearCookie(identityKey);
        res.json({
            code: 1,
            msg: '退出登录成功'
        });
    });
});
// 全部商品
app.get('/allshop', function (reg, res) {
    const db = getDb();
    db.query('select * from allshop;', null, function (error, result) {
        const obj = {
            status: 0,
            data: result
        }
        res.json(obj);
    })
})
// 推荐商品
app.get('/reconmhop', function (reg, res) {
    const db = getDb();
    db.query('select * from recom;', null, function (error, result) {
        console.log(result);

        const obj = {
            status: 0,
            data: result
        }
        res.json(obj);
    })
})
// 分类商品
app.get('/shop', function (reg, res) {
    const db = getDb();
    db.query('select * from smallcalss where commodityname like ' + '"' + '%' + reg.query.name + '%' + '"' + ';', null, function (error, result) {
        console.log(result);

        const obj = {
            status: 0,
            data: result
        }
        res.json(obj);
    })
})
// 模糊搜索
app.get('/search', function (reg, res) {
    const db = getDb();
    db.query('select * from allshop where shopname like ' + '"' + '%' + reg.query.name + '%' + '"' + ';', null, function (error, result) {
        const obj = {
            status: 0,
            data: result
        }
        res.json(obj);
    })
})
// select * from allshop where shopname like '%碎肉%';
const server = app.listen(9999, function () {
    console.log('run http://localhost:9999');
})