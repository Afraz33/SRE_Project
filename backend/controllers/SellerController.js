const sellerModel = require("../models/sellerModel");
const jwt = require("jsonwebtoken");

//Seller Login
let login = async (req, res) => {
  let { email, password } = req.body;
  await sellerModel
    .findOne({ email: email })
    .then((seller) => {
      console.log(seller);
      if (seller.password == password) {
        let token = jwt.sign(
          {
            id: seller._id,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "12h",
          }
        );
        res
          .status(200)
          .json({ message: "Yayy Login Successfull", seller: seller, token });
      } else {
        res.status(500).json({ message: "Login Failed" });
      }
    })
    .catch((err) => {
      res.status(500).json({ "Message Displayed": "Login Failed", err: err });
    });
};

//Get All sellers info
const getAllSellers = async (req, res) => {
  try {
    const sellers = await sellerModel.find();
    res.json(sellers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Update the profile of Seller
const update = async (req, res) => {
  var id = req.params.id;
  // await userModel.updateOne()
  sellerup = await sellerModel
    .updateOne({ _id: id }, { $set: req.body })
    .then((sellerup) => {
      res.status(200).json(sellerup);
    })
    .catch((err) => {
      res.status(500).json({ Message: "Profile Can not be updated", err: err });
    });
};

//Delete Account of a Seller
const delAccount = async (req, res) => {
  try {
    if (req.ID == req.params.id) {
      let id = req.params.id;
      const seller = await sellerModel.findByIdAndDelete(id);
      if (!seller) {
        return res.status(404).send("Seller not found");
      }
      res.send(seller);
    } else {
      return res.status(404).send("you can not delete other seller account");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const signup = async (req, res) => {
  let { name, email, password, phone, address } = req.body;
  try {
    const seller = new sellerModel({
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
    });
    const result = await seller.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
module.exports = { delAccount, getAllSellers, signup, login, update };
