import knex from "knex";

export abstract class MySQL {

    protected builder: knex;
    public transaction: knex.Transaction;

    constructor(
        
    ) {
        const host = 'DB_HOST';
        const user = 'DB_USER';
        const pass = 'DB_PASS';
        const name = 'DB_NAME';
        const port = 'DB_PORT';

        this.builder = this.doConnection({
            host,
            user,
            pass,
            name,
            port
        })
    }

    private doConnection(envs: any) {
        const connection = {
            host: process.env[envs.host],
            user: process.env[envs.user],
            password: process.env[envs.pass],
            database: process.env[envs.name],
            port: process.env[envs.port]
        }

        if (process.env.APP_ENV === 'dev' && !connection.host) {
            throw new Error('Invalid connection.host config, need var env = ' + connection.host);
        }

        return knex({
            client: 'mysql2',
            connection,
            pool: {
                min: 0,
                max: 1,
                idleTimeoutMillis: 5000
            }
        });
    }


    protected async exec(query: knex.QueryBuilder) {

        if (this.transaction) {
            query.transacting(this.transaction);
        }

        return query;
    }
      
}