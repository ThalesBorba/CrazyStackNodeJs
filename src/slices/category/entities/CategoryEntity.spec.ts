import { CategoryEntity } from "./CategoryEntity";
import MockDate from "mockdate";

export const fakeCategoryEntity = {
    _id: "123",
    createdById: "123",
    name: "test",
    description: "test",
    image: "test",
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};

export const fakeCategoryPaginated = {
    Categories: [
        fakeCategoryEntity, 
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity,
        fakeCategoryEntity
    ],
    total: 11
}

describe("Category", () => {
    beforeAll(async() => {
        MockDate.set(new Date());
    });
    afterAll(async() => {
        MockDate.reset();
    });
    it("can be created", () => {
        const obj = new CategoryEntity(fakeCategoryEntity);
        expect(obj).toBeTruthy();
        expect(obj).toEqual({
            ...fakeCategoryEntity,
            _id:undefined,
            active: false,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    });
});