// Start Command
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

// create table command
aws dynamodb create-table --table-name Student --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S --key-schema AttributeName=id,KeyType=HASH  AttributeName=name,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --table-class STANDARD --endpoint-url http://localhost:8000

// Table List
aws dynamodb list-tables --endpoint-url http://localhost:8000


// insert Data command
aws dynamodb put-item --table-name Student --item "{\"id\": {\"S\": \"1\"}, \"name\": {\"S\": \"John Doe\"}}" --endpoint-url http://localhost:8000


// Retrive data command
aws dynamodb scan --table-name Student --endpoint-url http://localhost:8000

// Update Data
aws dynamodb update-item --table-name Student --key '{"id": {"S": "1"}, "name": {"S":"John Doe"}}' --update-expression "SET attribute_name = :name" --expression-attribute-values '{":name": {"S": "Joshim Khondokar"}}' --endpoint-url http://localhost:8000

