import { User } from "./user.model";

export const getUser = (req, res) => {
  res.status(200).json({ data: req.user });
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec();
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
