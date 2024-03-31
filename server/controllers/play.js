module.exports.Signup = async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ message: "User signed in successfully", success: true, user });

    next();
  } catch (error) {
    console.error(error);
  }
};
