# inside-door-restful-api
a free restful api for [inside door](https://github.com/h53/inside-door-wechat-miniprogram), easily get the infomation of this day in history.  

![QRcode](https://raw.githubusercontent.com/h53/inside-door-wechat-miniprogram/master/miniprogram/images/QRcode.jpg)

## how to use
```
GET https://insidedoor.herokuapp.com/api/api-name/version/language/month/day
GET https://insidedoor.herokuapp.com/api/thisdayinhistory/v1/zh/1/31
```

## deploy your own server
```
$ git clone git@github.com:h53/inside-door-restful-api.git
$ cd inside-door-restful-api
$ npm install
```
import database file to your mongodb, db `thedoor` collection `zh1`, change database url to your own  
you can find database file at [here](https://github.com/h53/inside-door-wechat-miniprogram/tree/master/database)
```
$ npm start
GET http://localhost:5000/api/thisdayinhistory/v1/zh/1/31
```
