const experss = require('express');
const cors = require('cors');
const { response } = require('express');
const app = experss();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(experss.json());
app.get('/', (req, res) => {
    res.send('Look mama i can code now')
});

const users = [
    { id: 1, name: 'shabana', email: 'shabana@gamil.com', phone: '0636565656' },
    { id: 2, name: 'alomgir', email: 'alomgir@gamil.com', phone: '24242452452' },
    { id: 3, name: 'pornima', email: 'pornima@gamil.com', phone: '5656564555' },
    { id: 4, name: 'kabila', email: 'kabila@gamil.com', phone: '5656555555565' },
    { id: 5, name: 'sabila', email: 'sabila@gamil.com', phone: '88655256858' },
    { id: 6, name: 'tabila', email: 'tabila@gamil.com', phone: '8545556555' },
    { id: 7, name: 'fariya', email: 'fariya@gamil.com', phone: '88387878578' },
]

app.get('/users', (req, res) => {
    // console.log('quary', req.query);
    // res.send(users)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users)
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Lisingin to por t', port);
})
