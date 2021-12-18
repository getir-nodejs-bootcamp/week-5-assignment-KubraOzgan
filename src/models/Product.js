const Mongoose = require("mongoose");

const ProductSchema = new Mongoose.Schema(
  {
    name: String,
    description: String,
    quantity: Number,
    unit_price: Number,
    category: [String], //Meyve,Elektoronik... / Model olusturup crud gerceklestikten sonra referansi verilebilir.
    //user kismini controllers create EKLE!!!!
    user_id: { //user => isAdmin? olanlarin tokeni musteriden farkli olsun
      type: Mongoose.Types.ObjectId, //usera ait oldugunu soyledik
      ref: "user"
    },
    media: String, //Birden fazla resim icin array tut
    comments: [
      {
        rate: Number,
        comment: String,
        created_at: Date,
        user_id: { //user => isAdmin
          type: Mongoose.Types.ObjectId,
          ref: "user"
        }
      },
    ]
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("product", ProductSchema);

