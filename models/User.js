const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter your Firstname"],
      trim: true,
      lowercase: true,
    },
    lastname: {
      type: String,
      required: [true, "Please enter your lastname"],
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      match: [/^\b[a-zA-Z0-9_]+\b$/, "Please enter a valid username"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid Email",
      ],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 8,
      select: false,
    },
    country: {
      type: String,
      required: [true, "Please select your country of recidence"],
    },
    region: {
      type: String,
      required: [true, "Please select your region"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    occupation: {
      type: String,
      required: [true, "Please enter your occupation"],
    },
    referral: {
      type: String,
      default: "",
    },
    referralEarnings: {
      type: Number,
      default: 0,
    },
    withdrawnbalance: {
      type: Number,
      default: 0,
    },
    transferredbalance: {
      type: Number,
      default: 0,
    },
    BTC: {
      name: {
        type: String,
        default: "Bitcoin",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/Lh9hdU2.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/DzXpOEn.png",
      },
      walletAddress: {
        type: String,
        default: "bc1qm93ajk9aylyzkjhukfc8g35w4t6nsztqux6ymd",
      },
      walletImg0ne: {
        type: String,
        default: "https://i.imgur.com/DzXpOEn.png",
      },
      walletAddressOne: {
        type: String,
        default: "bc1qm93ajk9aylyzkjhukfc8g35w4t6nsztqux6ymd",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },
      bonus: {
        type: Number,
        default: 0,
      },
    },
    ETH: {
      name: {
        type: String,
        default: "Etheruem",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/VSGKPLd.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/li3nFyD.png",
      },
      walletAddress: {
        type: String,
        default: "0xD6Bb08d3C4b36E9F2fB046Ea75a9989175D9C9Ce",
      },
      walletImg0ne: {
        type: String,
        default: "https://i.imgur.com/li3nFyD.png",
      },
      walletAddressOne: {
        type: String,
        default: "0xD6Bb08d3C4b36E9F2fB046Ea75a9989175D9C9Ce",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    BNB: {
      name: {
        type: String,
        default: "Binance coin",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/OyKFAvw.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/xSDuHpM.png",
      },
      walletAddress: {
        type: String,
        default: "bnb1cyfkm5z7lspg3d2sazjygw24cwr8csqga70pj9",
      },
      walletImg0ne: {
        type: String,
        default: "https://i.imgur.com/xSDuHpM.png",
      },
      walletAddressOne: {
        type: String,
        default: "bnb1cyfkm5z7lspg3d2sazjygw24cwr8csqga70pj9",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    USDT: {
      name: {
        type: String,
        default: "Tether",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/Sjieype.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/3jMC89t.png",
      },
      walletAddress: {
        type: String,
        default: "0xD6Bb08d3C4b36E9F2fB046Ea75a9989175D9C9Ce",
      },
      walletImg0ne: {
        type: String,
        default: "https://i.imgur.com/3jMC89t.png",
      },
      walletAddressOne: {
        type: String,
        default: "0xD6Bb08d3C4b36E9F2fB046Ea75a9989175D9C9Ce",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    LTC: {
      name: {
        type: String,
        default: "Litecoin",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/ZGG3Uzl.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/RGWwX8i.png",
      },
      walletAddress: {
        type: String,
        default: "ltc1qgzg7tmwtyt0r59wmdzqcky4l03fvqvnc9s2r20",
      },
      walletImg0ne: {
        type: String,
        default: "https://i.imgur.com/RGWwX8i.png",
      },
      walletAddressOne: {
        type: String,
        default: "ltc1qgzg7tmwtyt0r59wmdzqcky4l03fvqvnc9s2r20",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },
      bonus: {
        type: Number,
        default: 0,
      },
    },
    BCH: {
      name: {
        type: String,
        default: "Bitcoin Cash",
      },
      logo: {
        type: String,
        default: "",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/1zncPnB.png",
      },
      walletAddress: {
        type: String,
        default: "qz6rzyn2px9d5zyqg092mgqam8vgjm8eeq7mclwq6p",
      },
      walletImg0ne: {
        type: String,
        default: "https://i.imgur.com/1zncPnB.png",
      },
      walletAddressOne: {
        type: String,
        default: "qz6rzyn2px9d5zyqg092mgqam8vgjm8eeq7mclwq6p",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
    verificationinitiated: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: String,
      default: "Not Verified",
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userID: this._id,
      firstname: this.firstname,
      lastname: this.lastname,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
