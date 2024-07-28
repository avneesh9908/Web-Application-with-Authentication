const { z } = require("zod");

// create an object schema
const userSignupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(250, { message: "Password must be at most 250 characters" })
});

// create a function to validate the schema
const validateUserSignup = async (req, res, next) => {
  try {
    const parseBody = await userSignupSchema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

module.exports = { validateUserSignup };
