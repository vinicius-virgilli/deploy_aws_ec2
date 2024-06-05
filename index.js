const express = require('express');

const app = express();

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    return res.send({ message: "server is up!"});
});