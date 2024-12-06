const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const User = require('./src/model/User');

const app = express();
const port = process.env.port || 4000;
const url = 'mongodb://127.0.0.1:27017/userdb'

app.use(bodyParser.json());


mongoose.connect(url, {
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
   // useCreateIndex: true,
}).then(() => console.log("mongodb connected ")).catch((err) => console.log("mongodb connection error", err));

//get user endpoint
app.get('/users', async (req, res) => {
   const user = req.params.name;
   const data = await User.find();
   console.log(data);

   res.send(data);
})

// create user endpoint
app.post('/users', async (req, res) => {
   try {
      const { name, email, password } = req.body;
      // check if user is alrady exist
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res.status(400).json({ message: 'User already exist' })
      }
      // create new user
      const Newuser = new User({ name, email, password });
      console.log(Newuser);
      await Newuser.save();
      res.status(201).json({ message: ' User created successfully', user: Newuser })
   } catch (error) {
      res.status(500).json({ message: 'server error and creatin faild' })
   }
})

// update user endpoint
app.put("/users/:id", async (req, res) => {
   const userId = req.params.id;
   const updateData = req.body;

   console.log(userId);
   console.log(updateData);

   try {
      // find user by the id
      const updatedUser = await User.findByIdAndUpdate(userId, updateData);
      // const updatedUser = await User.updateOne({ userId }, { $set: updateData });
      if (!updateData) {
         return res.status(404).json({ message: 'user not found' })
      }
      res.status(200).json({ message: 'user updated successfully', user: updatedUser });

   } catch (error) {
      res.status(500).json({ message: 'server error', error })
   }

})

// delete user endpoit
app.delete('/users/:id', async (req, res) => {
   const userId = req.params.id;
   console.log(userId);
   // res.send("done")
   try {
      const deleteUser = await User.findOneAndDelete(userId);
      if (!deleteUser) {
         res.status(404).json({ message: "user note found" })
      }

      res.status(200).json({ message: 'User delete sucessful ', user: deleteUser })
   } catch (error) {

      res.status(500).json({ message: 'server error', error })
   }

})








app.listen(port, () => {
   console.log(`server is running at  https://localhost:${port}`);

})