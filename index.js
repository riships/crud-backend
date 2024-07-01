const express = require('express');
const app = express();


app.get('/number/multiply/:num1/:num2', (req,res)=>{
    let num1 = req.params.num1
    let num2 = req.params.num2
    let cal = num1 * num2
    res.end(JSON.stringify(cal))
});
app.get('/number/add/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    let cal = parseInt(num1) + parseInt(num2)
    res.end(JSON.stringify(cal))
});
app.get('/number/:operation/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    let cal = num1 / num2
    res.end(JSON.stringify(cal))
});


app.listen(3000,() => {
    console.log(`Server running on port http://localhost:3000`);
})