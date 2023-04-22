// From NodeJS
import fs from 'fs';
import path from 'path';

const handler = (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;
    const newFeedback = { id: new Date().toISOString(), email, feedbackText };

    try {
      const filePath = path.join(process.cwd(), 'data', 'feedback.json');
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData);
      data.push(newFeedback);
      fs.writeFileSync(filePath, JSON.stringify(data));
      return res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } catch (e) {
      console.log(e);
    }
  } else return res.status(200).json({ message: 'Nice!' });
};

export default handler;
