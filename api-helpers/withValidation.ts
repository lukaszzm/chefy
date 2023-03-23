import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import * as yup from "yup";

export const withValidation = <T extends OptionalObjectSchema<ObjectShape>>(
  schema: T,
  handler: NextApiHandler
) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      request.body = await schema.validate(request.body);

      return handler(request, response);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return response.status(400).json(error.message);
      }
      return response.status(500).json("Something went wrong.");
    }
  };
};
