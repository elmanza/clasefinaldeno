import { config, Application } from "./config/deps.ts";
import { router } from './routes/index.ts';
const { PORT } = config();
const app = new Application();

console.log(`Server on http://localhost:${PORT}`);

// app.use((ctx, next)=>{
//     ctx.response.body = "Todo bien, última clase, mañana remate de semestre!";
//     next();
// });
app.use(router.routes());
app.listen({port:Number(PORT)});