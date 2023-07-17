const mongoose = require("mongoose");

const DepositListSchema = new mongoose.Schema(
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
    },
    amount: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DepositList", DepositListSchema);
