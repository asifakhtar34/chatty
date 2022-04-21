let express = require('express');
let path = require('path')

let app = express();

app.use(express.static(path.join(__dirname, 'public')))

let PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=>{ console.log(`server is up and running at port ${PORT}`)})