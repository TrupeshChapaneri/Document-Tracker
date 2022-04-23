import Joi from "joi";

const signupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(5).max(20).required(),
  fullName: Joi.string().min(4).max(20).required(),
});

const signInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(5).max(20).required(),
});

export { signupSchema, signInSchema };
