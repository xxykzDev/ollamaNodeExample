import express from 'express';
import ollamaRoutes from './routes/queryRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();

app.use(express.json());
app.use('/api', ollamaRoutes);

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Ollama Node API',
        version: '1.0.0',
        description: 'API for querying Ollama using a Docker service'
      },
      servers: [
        {
          url: 'http://localhost:8000/api'
        }
      ]
    },
    apis: ['./src/routes/queryRoutes.ts'],
  };
  
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
