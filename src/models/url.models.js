import joi from "joi";

const urlSchemma = joi.object({
  url: joi
    .string()
    .regex(
      /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
    )
    .required(),
  short_link: joi.string(),
});

export default urlSchemma;
