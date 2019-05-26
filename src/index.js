const express = require('express')
const PORT = process.env.PORT || 4200;

const app = express()

app.use(express.static(__dirname + '/index.html'))
app.get('/*', function(req, res) { 
res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => console.log('UI service listening on port '+PORT+'!')) 
 
