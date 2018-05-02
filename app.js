const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

// Create Redis Client

let client = redis.createClient();
client.on('connect', () => {
    console.log('Connected to redis....')
})
const port = 3000;
const app = express();
app.use("/styles", express.static(__dirname + '/assets'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//method Override
app.use(methodOverride('_method'));
app.get('/usersadd', (req, res) => {
    res.render('adduser')
})
app.get('/', (req,res,next) => {
    res.render('searchusers')
});

app.post('/user/search', (req, res, next) => {
    let id = req.body.id;
    client.hgetall(id, (err,obj) => {
        if(!obj) {
            res.render('searchusers', {
                error: 'User does not exist'
            });
        } else {
            obj.id = id;
            res.render('details', { user: obj})
        }
    })
});
app.listen(port, function() {
    console.log('Server started on port'+ port)
})