const express = require('express');
const app = express();
const port = 3000;

app.use('', express.static('./public/'));
app.use(express.json());

app.post('/logos', (req, res) => {
    res.status(200).send(res);
});

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
});