import axios from 'axios';

export const queryController = async (req: any, res: any) => {
    const { prompt } = req.body;
    const url = 'http://host.docker.internal:11434/api/generate';
    const body = {
        model: "tinyllama",
        prompt: prompt,
        Stream: false
    };

    try {
        const response = await axios.post(url, body, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}, body: ${response.data}`);
        }

        console.log("Response text:", response.data);
        res.status(200).json(response.data.response);
    } catch (error) {
        console.log("Error in queryController:", error);
        res.status(500).json({ error: error });
    }
};
