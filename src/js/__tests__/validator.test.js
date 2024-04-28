import { luhnAlgorithm } from "../Validator";

test.each([
  ["true", "5197901455490400", true],
  ["true", "3589809069902184", true],
  ["true", "375453011443981", true],
  ["true", "6011607260779752", true],
  ["false", "75464576h64999", false],
  ["false", "4254677678", false],
  ["false", "12345000000000", false],
])("Должно быть %s", (s, value, expected) => {
  expect(luhnAlgorithm(value)).toBe(expected);
});
