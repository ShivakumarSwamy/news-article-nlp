import { isValidUrl } from "../validUrl";

describe("Testing the isValidUrl functionality", () => {
  test("Testing the isValidUrl() function", () => {
        expect(isValidUrl).toBeDefined();
  });

   test("Testing the valid url", () => {
         expect(isValidUrl("https://www.bbc.com/sport/football/64988333")).toBeTruthy();
   });

   test("Testing the invalid url", () => {
         expect(isValidUrl("invalid-url")).toBeFalsy();
   });
});