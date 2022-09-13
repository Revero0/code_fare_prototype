var express = require("express");
var app = express();

const { Sequelize, DataTypes }= require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Comments = sequelize.define('Comments', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});

(async () => {
await Comments.sync();
})();

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', async function(req, res) {
  res.render('index');
});


app.post('/farmer=입력', async function(req, res) {
  const { rn } = req.body
  const { id } = req.params
  console.log(id)
  await Comments.create({ 농장명_입력: [위치_입력, 상품명_입력, 종류_입력, 링크_입력] })
  
});

app.listen(3000);
console.log('app listening on port 3000')