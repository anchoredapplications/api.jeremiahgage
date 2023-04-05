up-dev: 
	docker-compose up --build
up-prod:
	docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
down: 
	docker-compose down