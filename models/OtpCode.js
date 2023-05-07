const mongoose = require("mongoose");

const OtpCodeSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OtpCode", OtpCodeSchema);
