/**
 * 참조사이트
 * https://joshua1988.github.io/ts/
 * https://yamoo9.gitbook.io/typescript/
 */

console.log("this is test");

const testGeneric = <T>(par: T): T => {
  return par;
};

console.log(testGeneric<string>("string"));
console.log(testGeneric<number>(1));
console.log(testGeneric<boolean>(true));
