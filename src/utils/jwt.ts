import jwt from 'jsonwebtoken';
import "dotenv/config";

export function generateToken(user: string) {
    const token = jwt.sign({user}, "MonSuaCasMarAlb", { expiresIn: '1h' });
    return token;
}

export function validateToken(req: any, res: any, next: any){
    try{
        let accessToken = req.headers['authorization'] || req.headers['x-access-token'];

        if(!accessToken){
            res.json({ message: "Access denied, token?" });
        }
        if(accessToken.startsWith('Bearer ')){
            accessToken = accessToken.slice(7, accessToken.lenght);
        }

        jwt.verify(accessToken, "MonSuaCasMarAlb", (err: any, decoded: any) => {
            if(err){
                res.json({ message: "Access denied, token expired or incorrect" });
            }else{
                next();
            }
        });
    }catch (error) {
        res.status(418);
    }
}