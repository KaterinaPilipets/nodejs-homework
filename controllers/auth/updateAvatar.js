const path = require("path");
const { User } = require("../../models/user");
const fs = require("fs/promises");
const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");
const Jimp = require("jimp");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);

  const avatarImgPath = path.join(avatarsDir, filename);
  const avatarImg = await Jimp.read(avatarImgPath);
  avatarImg.resize(250, 250);
  avatarImg.write(avatarImgPath);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};
module.exports = updateAvatar;
