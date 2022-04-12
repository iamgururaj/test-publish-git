export default function gitPublishFunctionOne(a, b) {
  console.log("${a} ${b} passed to testFunction successfully");
  return a * b;
}

export function gitPublishFunctionTwo(a, b) {
  console.log("${a} ${b} passed to anotherTestFunction successfully");
  return a % b;
}

export * from "./type-test.ts";
