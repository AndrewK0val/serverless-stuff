import { Handler } from "aws-lambda"


export const handler: Handler = async (event, context) => {
  try {
    console.log("I was invoked")
    return {
      statusCode: 200,
      headers: {
        "content-type": "applications/json"
      },
      body: {message: "This is a msg returned by a lambda func"},

    } 

  } catch (error) {
    console.log(error)
    return {

      statusCode: 500,
      Headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({error}),
    }
  } 
}
