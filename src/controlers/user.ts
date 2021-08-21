import mongoose from 'mongoose';

export const createUser = (payload: any) => {
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  try {
    const kitten = mongoose.model('User', kittySchema);
    const user = new kitten({ ...payload });
    user.save();
  } catch (error) {
    console.log(error);
  }
};
