import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
let data = {};
let blogpost=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`listen at port ${port}`);
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/post', (req, res) => {
    res.render('post.ejs');
});

app.post('/submit', (req, res) => {
    let name = req.body["Name"];
    let post = req.body["Post"];
    data = {
        name: name,
        post: post,
    };
    blogpost.push(data);
    res.redirect('/view');
});

app.get('/view', (req, res) => {
    res.render('view.ejs', { blogpost: blogpost }); 
});
