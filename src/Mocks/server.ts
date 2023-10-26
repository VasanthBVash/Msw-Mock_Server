import { setupServer } from "msw/node";
import { hookFormHandlers } from "./services/hookFormHandlers";

export const server = setupServer(...hookFormHandlers);
export { setupServer };
