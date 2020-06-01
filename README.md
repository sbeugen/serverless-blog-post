# Serverless Blog Post
This repository includes examples related to my blog posts regarding the serverless topic.

## serverless-express-example
Inside of `/serverless-express-example` you will find an express server running inside a lambda function triggered via an api gateway.

### Endpoints
The server provides two endpoints
1. `/hello` which will respond with "Hello World!"
2. `/hello/{SOME_NAME}` which will respond with "Hello SOME_NAME!"

### Run locally
```
cd serverless-express-example
npm install
sam build
sam local start-api
``` 
The instructions on the screen will tell you which url to use to invoke the api

### Deploy to AWS
Make sure to configure your (SAM CLI)[https://aws.amazon.com/serverless/sam/] and (AWS credentials)[https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html] correctly

```
cd serverless-express-example
npm install
sam build
sam deploy --guided (--profile YOUR-PROFILE)
``` 

Follow the instructions on the screen.
After confirming, that SAM/ CloudFormation should deploy all the needed resources you will find your lambda in the AWS Console.
