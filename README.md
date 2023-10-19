# Kudobuzz Interview Challenge
### Problem Statement: 
-  Get subscriptions with plan pricing greater than or equal to $50.
-  Add the filtered subscriptions to a CSV file

CSV Format


Data Set
Generate the data below and add it to your database.
    -  Add plans data to the database.
    -  Create subscriptions:-
    -  500 instances of the freemium subscription.
    -  7000 instances of the bronze subscription.
    -  12000 instances of the silver subscription.
    -  8000 instances of the gold subscription.
    -  5000 instances of the platinum subscription.
    -  Create a unique business id for each subscription instance


# Solution
## Steps to run the code
* Clone the repo by running the command `git clone https://github.com/echoeyecodes/kudobuzz.git`
* Run `npm install` to install the dependencies
* Create a `.env` file and add your database uri following the format in `.env.example`
* You can execute the typescript file directory by running `npm run start-watch`. This should run the `index.ts` file in the `src` directory
* To execute the js file, run `npm run build` to compile the code. It should generate a `dist` folder. Then run `npm start` to execute the code.


## Running as commands
You can also execute seperate functions in the `scripts` folder by running:
* `npm run kudobuzz create-plan` to create default plans
* `npm run kudobuzz generate-instances` to generate all instances as defined above
* `npm run kudobuzz print-subscriptions price` to export all subscriptions with plans greater than or equal to {{price}}


## Testing
Run `npx jest` to run the test in the `tests` folder