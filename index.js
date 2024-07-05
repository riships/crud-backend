const express = require('express');
const app = express();

app.use(express.json());

const numMiddleware = (req, res, next) => {
    console.log(req.body);
    next(); 
};

app.post('/number', numMiddleware, (req, res) => {
    res.json(req.body); 
});

app.listen(3000, () => {
    console.log(`Server running on port http://localhost:3000/number`);
});
