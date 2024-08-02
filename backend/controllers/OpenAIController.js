const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const addAITask = async (req, res) => {
  try {
    const { title } = req.body;
    const prompt = `You are an AI assistant for a smart AI Task. Create a task for "${title}".
        Please provide a JSON object response:
        {
            "title": "${title}",
			"id": "A unique ID for the task in number",
            "description": "A description for this task",
            "category": "Category of the task",
            "priority": "HIGH or MEDIUM or LOW",
            "tags": ["tag1", "tag2"],
            "notes": "Write some notes to respect about this task"
        }`;

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt,
      max_tokens: 400,
    });
    return res
      .status(200)
      .json({ message: "Done", task: completion.choices[0].text });
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .send({ message: err.message || "Something went wrong" });
  }
};

module.exports = {
  addAITask,
};
