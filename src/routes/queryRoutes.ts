import { Router } from 'express';
import { queryController } from '../controllers/queryController';

const router = Router();

/**
 * @openapi
 * /queryOllama:
 *   post:
 *     summary: Query Ollama service
 *     description: Posts a prompt to the Ollama service and gets a response.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prompt:
 *                 type: string
 *                 description: Prompt to send to Ollama service
 *                 example: 'Why is the sky blue?'
 *     responses:
 *       200:
 *         description: Successful response from Ollama
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Response from Ollama service
 *                   example: 'Response from llama3 with prompt "Why is the sky blue?"'
 *       500:
 *         description: Error in calling the Ollama service
 */
router.post('/queryOllama', queryController);

export default router;
