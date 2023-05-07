const mongoose = require("mongoose");

const OtpCodeSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    code: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OtpCode", OtpCodeSchema);
