#docucron v

#run
composer install

php artisan vendor:publish --tag=admin-core
php artisan migrate --seed --seeder=AdminCoreSeeder
php artisan storage:link
npm install
php artisan key:generate

npm run dev
php artisan serve
