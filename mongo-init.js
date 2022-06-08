db = db.getSiblingDB('hotelbookingz');
db.createUser(
    {
        user: "root",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "hotelbookingz"
            }
        ]
    }
);

db.createCollection('users');
db.createCollection('users_token');

db.users.insertMany([
    {
        user: 'admin',
        password:'137bb12fd34145204d1213c15512f244' // hotelbookingz,
    }
]);