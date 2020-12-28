const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//app.use(express.json())

const thisdayinhistoryv1zh = require('./routes/api/thisdayinhistoryv1zh');
app.use('/api/thisdayinhistory/v1/zh',thisdayinhistoryv1zh);

const root = require('./routes/root');
app.use('/',root);

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));