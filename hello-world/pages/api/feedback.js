// From NodeJS
import fs from 'fs';
import path from 'path';

const buildFeedbackPath = () => path.join(process.cwd(), 'data', 'feedback.json');
const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
};

const handler = (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;
    const newFeedback = { id: new Date().toISOString(), email, feedbackText };

    try {
      const filePath = buildFeedbackPath();
      const data = extractFeedback(filePath);
      data.push(newFeedback);
      fs.writeFileSync(filePath, JSON.stringify(data));
      return res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } catch (e) {
      console.log(e);
    }
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return res.status(200).json({ feedback: data });
  }
};

export { buildFeedbackPath, extractFeedback };
export default handler;
