const { sendEmail, HttpError } = require("../../helpers");
const { User } = require("../../models/user");
require("dotenv").config();

const { BASE_URL } = process.env;

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  //   console.log(verificationToken);
  const user = await User.findOne({
    verificationToken,
  });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.json({
    message: "Verification successful",
  });
};

const resendVerifyEmail = async (req, res) => {
  //   console.log("resendVerifyEmail");

  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404);
  }
  if (user.verify) {
    throw HttpError(401, "Email already verify");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verify email send success",
  });
};

module.exports = { verifyEmail, resendVerifyEmail };
