/**
 * NOTE!
 *     const results = await User.findAll({where: {name: }})
 */


const {Sequelize} = require('sequelize');
const { init } = require('./models/Models')
const routes = require('./routes/routes')
const cors = require('cors')
const helmet = require('helmet');
const express = require('express');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite3"
});

const app = express();

(async () =>{
    await init(sequelize);

    app.use(cors());
    app.use(helmet());
    app.use(express.json())

    app.get('/', (req, res) => res.send("Hello World!"));
    app.use("/api/v1/users", routes)
    app.listen(3000)

    // const jane = await User.create({
    //     name:"Jane Doe",
    //     email: "user@email.com",
    //     password: "123123123",
    // })
    // await jane.save();
    // const order = new Order({orderId:"qwnofnoefngoiwenoasm", UserId:1})
    // await order.save();
    // const results = await User.findAll({include: Order})
    // console.log(JSON.stringify(results, null, 4))
}) ()