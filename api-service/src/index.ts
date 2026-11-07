import express,{Request, Response}from'express';
export const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
//Endpointde observabilidadparaelciclo devida CI/CD
app.get('/health', (_req:Request,res:Response)=> {res.status(200).json({
status:'ok',
uptime:process.uptime(),
timestamp:new Date().toISOString(),
service:'api-service'
});
});
app.get('/api/v1/info',(_req: Request,res: Response)=>{
res.status(200).json({
name:'CI/CDMicroserviceBase',
version:'1.0.0',
environment:process.env.NODE_ENV||'development'
});
});
if
  (process.env.NODE_ENV !== 'test') {
app.listen(PORT,()=>{
console.log(`[server]:APIServicerunningon port${PORT}`);
});
}
