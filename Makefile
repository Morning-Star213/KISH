dev:
	docker-compose up

build:
	docker-compose build

c:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails c"

migrate:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails db:migrate"

migrate-redo:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails db:migrate:redo"

rollback:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails db:rollback"

reset:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails db:reset"

seed:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails db:seed"

codegen-store:
	/bin/bash -c "cd store && pnpm run codegen"

codegen-storeadmin:
	/bin/bash -c "cd storeadmin && pnpm run codegen"

brand-id-offen:
	docker compose run --rm app /bin/bash -c "cd server && bin/rails c <<< 'puts Brand.first.uuid'"
