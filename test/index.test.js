const {generateStrongPassword, isStrongPassword} = require("../dist/index.cjs");

describe("generateStrongPassword" , () => {
    it("should generate a password of the specified length", () => {
        const password = generateStrongPassword(16);
        expect(password.length).toBe(16);
    });

    it("should generate a password with allowed characters", () => {
        const password = generateStrongPassword();
        expect(password).toMatch(/^[^=]+$/);
    });
})

describe("isStrongPassword" , () => {
    it("shoud contain uppercase, lowercase, numbers and special characters", () => {
        const isStrong = isStrongPassword("pC%mD8TpCKn2");
        expect(isStrong).toBe(true);
    });

    it("shoud return false if there's not one of the character types presnet", () => {
        const isStrong = isStrongPassword("Hello World");
        expect(isStrong).toBe(false);
    });
})
