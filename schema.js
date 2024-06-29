const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restoSchema = new Schema({
  deligateName: { type: String },
  guestName: { type: String },
  name: { type: String },
  stuzzichini: { type: String },
  pesce: { type: String },
  fritti: { type: String },
  insalata: { type: String },
  crostini: { type: String },
  pastaandalforno: { type: String },
  carne: { type: String },
  dolci: { type: String },
  pizza: { type: String },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model("restos", restoSchema);
