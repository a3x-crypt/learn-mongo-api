import controllers from "../item.controller";
import { isFunction } from "lodash";

describe("item controllers", () => {
  test("has crud controller", () => {
    const crudMethods = [
      "getOne",
      "getMany",
      "createOne",
      "removeOne",
      "updateOne"
    ];

    crudMethods.forEach(name =>
      expect(isFunction(controllers[name])).toBe(true)
    );
  });
});
