const {  Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {

    description:String,
    date:String,
    time: String,
    created_at: String,

  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("Todo", todoSchema);

