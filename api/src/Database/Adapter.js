const MongoClient =  require('mongodb').MongoClient;

module.exports = class Adapter {
    mongoUrl = 'mongodb://127.0.0.1:27017/hotelbookingz';
    database = 'hotelbookingz';

    connect() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.mongoUrl, (err, db) => {
                if (err) {
                    reject(err);
                }
                resolve(db.db(this.database));
            });
        });
    };

    async insert(collection, data) {
        const db =  await this.connect();
        await db.collection(collection).insertOne(data);
        return 'OK';
    }

    async findOne(collection, filter, options = []) {
        const db =  await this.connect();
        const result = await db.collection(collection).findOne(filter, options);
        return result;
    }

    async updateOne(collection, filter, update) {
        const db = await this.connect();
        const result = await db.collection(collection).findOneAndUpdate(filter, update);
        return result;
    }

    async aggregate(collection, pipeline) {
        try {
            const db = await this.connect();
            const results = await db.collection(collection).aggregate(pipeline);
            return results.toArray();
        } catch (exception) {
            // @todo
        }
    }

    async findAll(collection) {
        let results = [];
        try {
            const db = await this.connect();
            const data = await db.collection(collection).find();

            results = data.toArray();

        } catch (exception) {

        }

        return results;
    }


}