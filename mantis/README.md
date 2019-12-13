## BUILDING

# How to build on production
ng build --prod --base-href /mantis/v4/ --deployUrl /mantis/v4/

# How to build on testsite
ng build --configuration=test --base-href /mantis/v4/ --deployUrl /mantis/v4/

# how to run on development server
ng serve --host 0.0.0.0 --port 8085 --disable-host-check --poll=2000  --watch
