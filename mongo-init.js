db.createUser(
    {
        user: "root",
        pwd: "examples",
        roles: [
            {
                role: "readWrite",
                db: "hotelbookinz"
            }
        ]
    }
);