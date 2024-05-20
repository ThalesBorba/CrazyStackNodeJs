import mockdate from "mockdate";
import { mock, MockProxy } from "jest-mock-extended";

describe("test", () => {
    let testInstance: any
    let anyDependency: MockProxy<any>;
        beforeAll(async () => {
            mockdate.set(new Date("2022-01-01"));
            anyDependency = mock<any>();
            //anyDependency.mockReturnValue("anyValue");
            //anyDependency.mockResolvedValue("anyValue");
        });
    beforeEach(() => {//testInstance = anyFunction(anyDependency); }      
    afterAll(async () => mockdate.reset());
    it("test", async () => {
        const obj = { test: '123' };
        expect(obj).toBeTruthy();
    })
    })
});  