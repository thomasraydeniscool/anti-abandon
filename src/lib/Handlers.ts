import { handleError } from './Error';
import { ApiSuccess } from './ApiSuccess';

/**
 * This function is used to wrap async / await functions and handle any
 * errors that may be thrown by that function. Makes it cleaner than
 * having try / catch blocks throughout the code.
 */
export const step = controller => (req, res, next) =>
  controller(req, res, next)
    .then((result: ApiSuccess) => {
      if (result instanceof ApiSuccess) {
        result.respond();
      }
    })
    .catch(handleError(res));

export const steps = (...controllers) =>
  controllers.map(controller => step(controller));
