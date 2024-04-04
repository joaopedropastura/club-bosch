import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/index'

dotenv.config()

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private async database () : Promise<void> {

          try {
            await mongoose.connect(process.env.MONGO_URI as string, {                
            });
            console.log('Connected to MongoDB');
            // Defina os modelos e execute outras operações após a conexão bem-sucedida, se necessário
        } catch (error : any) {
            console.error('Error connecting to MongoDB:', error.message);
            // Trate o erro de conexão aqui, se necessário
        }
    
          
    }

    private routes (): void {
        this.express.use(routes)
    }
}

export default new App().express