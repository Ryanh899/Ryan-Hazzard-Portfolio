const express = require('express'); 
const app = express(); 
const path = require('path')
const PORT = process.env.PORT || 3000; 



app.use(express.static(__dirname + '/views/')); 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`listening on port ${PORT}`);
});