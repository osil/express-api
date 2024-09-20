const axios = require("axios");
const { profile } = require("console");

exports.authen = async (req, res) => {
  const { authen_username, authen_password, authen_system, authen_token } =
    req.body;
  console.log(authen_username, authen_password, authen_system, authen_token);
  try {
    const response = await axios.get(`${process.env.AUTHEN_URL}`, {
      params: {
        authen_username,
        authen_password,
        authen_system,
        authen_token,
      },
    });
    const data = response.data;
    res.status(200).json({
      statusCode: 200,
      message: data.message,
      authenSystem: data.authenSystem,
      authenSystemDetail: data.authenSystemDetail,
      authenToken: data.authenToken,
      authenRateLimit: data.authenRateLimit,
      authenRateLimitCount: data.authenRateLimitCount,
      authenBase: data.authenBase,

      data: data,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
      authenSystem: null,
      authenSystemDetail: null,
      authenToken: null,
      authenRateLimit: null,
      authenRateLimitCount: null,
      authenBase: null,
    });
  }
};
