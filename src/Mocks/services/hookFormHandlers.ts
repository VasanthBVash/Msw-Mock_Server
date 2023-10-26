import { rest } from "msw";
import { IProps } from "../../Services/useHookForm";

export const hookFormHandlers = [
    rest.get("/api/Users", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({  
                id:"vasanthuser",
                userName: "Vasanth",
                email: "Vasanth@gmail.com",
                phoneNumber: 1234567890,
                password: "ImJustAnOrdinaryPerson@2345",
            } as IProps),
        );
    }),
    rest.post("/api/user", (req, res, ctx) => {
        return res(ctx.delay(200), ctx.status(200), ctx.json({} as IProps));
    }),
    rest.put("/api/user", (req, res, ctx) => {
        return res(ctx.delay(200), ctx.status(200), ctx.json({}));
    }),
];