import { Handler } from "@netlify/functions";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";



function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const fetchData = async () => {
  try {
    const result = await axios.get(
      `https://lorem-faker.vercel.app/api?quantity=${getRandomInt(3,20)}`
    );
    return result.data;
  } catch (error) {
    return [];
  }
};

const handler: Handler = async (event, context) => {
  if( event.httpMethod === 'PUT'){
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'updated task'}),
    };
  }
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