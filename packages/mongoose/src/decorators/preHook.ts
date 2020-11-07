import {getDecoratorType} from "@tsed/core";
import {HookErrorCallback} from "mongoose";
import {MongoosePostErrorHookCB, MongoosePostHookCB, MongoosePreHookAsyncCB, MongoosePreHookSyncCB} from "../interfaces";
import {schemaOptions} from "../utils/schemaOptions";

export interface PreHookOptions {
  parallel?: boolean;
  errorCb?: HookErrorCallback;
}

/**
 *
 * We can simply attach a `@PreHook` decorator to your model class and
 * define the hook function like you normally would in Mongoose.
 *
 * ```typescript
 * import {Ignore, Required} from "@tsed/di";
 * import {PreHook, Model} from "@tsed/mongoose";
 *
 * @Model()
 * @PreHook("save", (car: CarModel, next) => {
 *    if (car.model === 'Tesla') {
 *        car.isFast = true;
 *      }
 *      next();
 *})
 * export class CarModel {
 *
 *    @Ignore()
 *    _id: string;
 *
 *    @Required()
 *    model: string;
 *
 *    @Required()
 *    isFast: boolean;
 *
 *    // or Prehook on static method
 *    @PreHook("save")
 *    static preSave(car: CarModel, next) {
 *       if (car.model === 'Tesla') {
 *           car.isFast = true;
 *       }
 *       next();
 *    }
 * }
 * ```
 *
 * This will execute the pre-save hook each time a `CarModel` document is saved.
 *
 * @param {string} method
 * @param fn
 * @param options
 * @returns {Function}
 * @decorator
 * @class
 */
export function PreHook(
  method: string,
  fn?: MongoosePreHookSyncCB<any> | MongoosePreHookAsyncCB<any> | PreHookOptions,
  options?: PreHookOptions
): Function {
  return (...args: any[]) => {
    if (getDecoratorType(args) === "method") {
      options = fn as PreHookOptions;
      fn = args[0][args[1]].bind(args[0]);
    }

    schemaOptions(args[0], {
      pre: [
        {
          ...(options || {}),
          method,
          fn: fn as MongoosePostHookCB<any> | MongoosePostErrorHookCB<any>
        }
      ]
    });
  };
}
