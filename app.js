const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const Dbjob=require('./models/Dbjob')
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://otabek:otabek1998@cluster0.ywryelu.mongodb.net/node_js?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(4000, ()=>console.log('Server is running!!!')))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => {
  Dbjob.find().sort({createdAt:-1})
      .then((result)=>{
          res.render('home',{data:result})
      })
      .catch(err=>console.log(err))
},);
app.get('/user', requireAuth, (req, res) => res.render('user'));
app.use(authRoutes);