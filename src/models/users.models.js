import joi from "joi";

const userSchemma = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().required(),
});

const secondUserSchemma = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export { userSchemma, secondUserSchemma };
