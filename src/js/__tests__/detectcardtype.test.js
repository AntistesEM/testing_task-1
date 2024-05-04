import { checkPaySystem } from "../DetectCardType";

test.each([
  ["VISA", "4539507425745490", "visa"],
  ["MasterCard", "5197901455490400", "mastercard"],
  ["JCB", "3589809069902184", "jcb"],
  ["Diners Club", "30227772333681", "diners"],
  ["American Express", "375453011443981", "americanexpress"],
  ["American Express", "340739937162784", "americanexpress"],
  ["Discover", "6011330083101399", "discover"],
])("Должно быть %s", (s, value, expected) => {
  expect(checkPaySystem(value)[0]).toBe(expected);
});
