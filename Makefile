up-prod: 
	docker-compose up --build
up-dev:
	docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
down: 
	docker-compose down