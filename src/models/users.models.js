import joi from "joi";

const userSchemma = joi.object({
  name: joi.string().min(2),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string(),
});

export default userSchemma;
