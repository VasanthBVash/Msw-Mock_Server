import { setupWorker } from "msw";
import { hookFormHandlers } from "./services/hookFormHandlers";

export const worker = setupWorker(...hookFormHandlers);
