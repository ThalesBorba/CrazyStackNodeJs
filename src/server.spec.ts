import sayHelloWorld from "@/server";
describe("First test on node", () =>{
    test("Should call sayHelloWorld and return the message", ()=>{
        const message = sayHelloWorld("Hello World");
        expect(message).toBe("Hello World");
    });
});