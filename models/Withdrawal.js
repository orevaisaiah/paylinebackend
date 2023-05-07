const mongoose = require("mongoose");
const shortid = require("shortid");

const WithdrawalSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
    },
    coin: {
      type: String,
      required: [true, "Select coin type"],
    },
    amount: {
      type: String,
      required: [true, "Enter withdrawal amount"],
    },
    walletAddress: {
      type: String,
      required: [true, "Enter withdrawal wallet address"],
    },
    comment: {
      type: String,
    },
    reference: {
      type: String,
      default: shortid.generate,
    },
    status: {
      type: String,
      default: "Pending",
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Withdrawal", WithdrawalSchema);
