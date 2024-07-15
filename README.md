1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

    2. .~/nvm/nvm.sh

3. nvm install --Its

4. npm -i

5. sudo yum install git

6. git -v (to version)

7. Is

8. git clone 

9. Is

10. cd HothouseDemo(repo name)

11. Is -a
12. npm install

13. npm install aws-sdk

14. npm install multer

15. Is -a

16. vim .env
        Add all credentials 

17. npm start

#########################################################################################################################################################################################

(Node js 20x lambda function)

exports.handler = async (event, context) => {

try {

// Log the S3 event

console.log('Received S3 event:', JSON.stringify(event, null, 2));

// Return a success response

const response = {

statusCode: 200,

body: JSON.stringify('S3 event processed successfully'), };

return response;

} catch (error) {

// Log any errors that occur

console.error('Error processing S3 event:', error);

// Return an error response

const errorResponse = {

statusCode: 500,

body: JSON.stringify('Error processing S3 event'), };

return errorResponse;

}
};

###########################################################################################################################################################################################

**Database**

sudo dnf install mariadb105

mysql -h database-1.cpqgqq4ciwcy.us-east-1.rds.amazonaws.com -u admin -p

CREATE DATABASE test,

USE test

CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20), species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);

INSERT INTO pet VALUES ('Puffball', 'Diane', 'hamster', 'f','1999-03-30', NULL);

SELECT * FROM pet,
