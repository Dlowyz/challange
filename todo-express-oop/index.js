import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

app.get('/json-test', (req, res) => {
    res.send({ message: 'Hello, world!' });
}); 

app.listen(3009, () => {
    console.log('Server is running on port 3009');
});