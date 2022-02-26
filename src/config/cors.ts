import {Request, Response, NextFunction} from 'express';

class Cors{

    Header(req:Request , res:Response , next:NextFunction)  {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept , Authorization')
        next();
    }
}

export default new Cors();
