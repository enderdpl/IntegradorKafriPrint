import mongoose from 'mongoose'
 
const productSchema=  new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    url:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
      },
    //aca hacemos que la tarea se guarde en a un usuario y se hace de esta forma
    user: {
        // decimos que usaremos el id de un esquema que es el de user.model
        type: mongoose.Schema.Types.ObjectId,
        //aca va el nombre de ese esquema
        ref: 'User',
        // require: true
    }
},
    {
        timestamps:true
    }
)

export default mongoose.model('Product', productSchema)