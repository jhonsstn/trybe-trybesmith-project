import { ObjectSchema } from 'joi';
import BadRequestError from '../errors/bad-request-error';
import UnprocessableEntityError from '../errors/unprocessable-entity-error';
import IValidator from '../interfaces/validator-interface';

class Validator implements IValidator {
  constructor(readonly schema: ObjectSchema) {}

  validate = (data: unknown): void => {
    const { error } = this.schema.validate(data);
    if (error?.message.includes('required')) {
      throw new BadRequestError(error.message);
    }
    if (error?.message.includes('must')) {
      throw new UnprocessableEntityError(error.message);
    }
  };
}

export default Validator;
