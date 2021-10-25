import { Handler } from "@netlify/functions";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const fetchData = async () => {
  try {
    const result = await axios.get(
      "https://lorem-faker.vercel.app/api?quantity=9"
    );
    return result.data;
  } catch (error) {
    return [];
  }
};

const handler: Handler = async (event, context) => {
  const data = await fetchData() as string[]
  const tasks = data.map(task => ({
    description: task,
    id: uuidv4(),
    complete: false
  }))
  return {
    statusCode: 200,
    body: JSON.stringify(tasks),
  };
};

export { handler };