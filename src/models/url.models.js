import joi from "joi";

const urlSchemma = joi.object({
  url: joi.string().uri().required(),
  short_link: joi.string(),
});

export default urlSchemma;
