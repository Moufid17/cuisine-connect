
install:
	docker compose exec nodejs-server npm install

up:
	docker compose up -d

stop:
	docker compose down -v

start:
	docker compose exec nodejs-server npm run dev

bash:
	docker compose exec nodejs-server /bin/sh

