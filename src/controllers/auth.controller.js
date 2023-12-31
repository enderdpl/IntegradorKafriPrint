import user from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { createdAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";



export const register= async (req,res) => {
   const{email, password,username} =req.body

   try {
    //aca validamos el que el correo no exista
    const userFound= await user.findOne({email})
    if(userFound) return res.status(400).json(["Este email ya existe"])
    const passhash =  await bcrypt.hash(password,10)
    //para usar los valores de req.body y manejarlo mejor lo instanciamos como parte d ela tabla user que creamos
    const newUser= new user ({
        
        username,
        email,
        //para que guarde la contraseña encriptada
        password: passhash
       })
       
       //lo que guardamos lo metemos en una variable
    const userSaved= await newUser.save()
    // llamamos a la funcion en lib que genera el token y eso que genera lo guardamos el la variable token y le pasamos lo que queremos que identifica segun el usuario que entre que es el id
    const token = await createdAccessToken({id : userSaved._id})
        //guardamos el token en la cookie para que se pueda acceder mas facil mas adelante
    res.cookie('token', token)
      //antes se tenia asi "res.json(userSaved)"" y esto nos enviamos toda la informacion como rrespuesta asi que ahora lo hacemos de este modo para que nos envie solo el id,username, email

       res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
       })

   } catch (error) {
        console.log(error)
   }
}

export const login =  async (req,res) => {
    //solo necesitamos email y pass
    const {email, password}= req.body
     try {
        //para buscar a el usuario que se registra 
        const userFound= await user.findOne ({email})
        
        if (!userFound ) return res.status(400).json({message: 'Usuario no Encontrado'})
         // realizo la comparacion de las contraseña la que ingresa y la que encuentra atravez de su correo
         const isMatch =  await bcrypt.compare(password,userFound.password)

         if(!isMatch)return res.status(400).json({message: 'Contraseña es Incorrecta'})
         // generamos un token con la persona login
         const token = await createdAccessToken({id : userFound._id})
            
         res.cookie('token', token)
            res.json({
             id: userFound._id,
             username: userFound.username,
             email: userFound.email,
            })  
     } catch (error) {
         res.status(500).json({message:error.message})
     }
 
    
 } ;

 export const logout = (req,res) =>{
    res.cookie('token','',{
        expires: new Date(0)
    } )
    return res.sendStatus(200)
}

export const profile= async (req,res)=>{

    const userFound= await user.findById(req.user.id)
    if(!userFound) req.status(400).json({
        message: 'user not found'
    })
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
       })
}

export const verifyToken= async (req,res)=>{
    const { token }= req.cookies
    if(!token) return res.status(401).json({message: 'Usuario No Autorizado'})
    jwt.verify(token,TOKEN_SECRET,async (err,User)=>{
        if (err) return res.status(401).json({message: 'No autorizado'})

        const userFound= await user.findById(User.id)
        if(!userFound) return res.status(401).json({message: 'No autorizado'})
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        } )
    })
}