const express = require('express');
const app = express();


app.get('/number/:number', (req,res)=>{
    let num1 = parseInt(req.params.number)
    if (num1 == 10) {
        res.status(200).json({ "number": 10, "even": true })
    } else if (num1 == 11){
        res.status(400).json({ "number": 11, "odd": true })
    } else if (num1 == 0) {
        res.status(404).json({ "number": 11, "even": false, "odd":false })
    }
});


app.listen(3000,() => {
    console.log(`Server running on port http://localhost:3000/number`);
})