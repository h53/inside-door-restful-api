const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
//const url = ${{ secrets.MONGODB_URL }};
const url = process.env.MONGODB_URL; //for heroku

router.get('/:month/:day',async (req,res)=>{
    if(!isRealNum(req.params.month) || !isRealNum(req.params.day)){
        res.send("wrong params");
        return;
    }
    if(req.params.month > 12 || req.params.month < 1 || req.params.day > 31 || req.params.day < 1){
        res.send("wrong params");
        return;
    }
    const conn = await loadPostsColleccion();

    let month = req.params.month.replace(/\b(0+)/gi,"");
    let day = req.params.day.replace(/\b(0+)/gi,"");
    
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    }

    res.send(await conn.findOne({
        _id: month + day
    }));
});

router.get('/*',async (req,res)=>{
    res.send("wrong params");
    return;
});

async function loadPostsColleccion() {
    const conn = await mongodb.MongoClient.connect(url,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
     });
    return conn.db('thedoor').collection('zh1');
}

function isRealNum(val){
　　return val != null && val !== "" && !isNaN(val);
}

module.exports = router;