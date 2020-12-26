const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//app.use(express.json())

const routerv1 = require('./routes/api/routerv1');
app.use('/api/v1',routerv1);

const root = require('./routes/root');
app.use('/',root);

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));