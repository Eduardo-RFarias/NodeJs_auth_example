sudo docker run --net=host --name mypg -e POSTGRES_PASSWORD=password -e POSTGRES_DB=test_project_db  -p 5432:5432 postgres:14-alpine