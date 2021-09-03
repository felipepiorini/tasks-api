import { MySQL} from "@Data/Source/MySQL/MySQL";
const moment = require('moment-timezone');

export class TasksModel extends MySQL {
   
    protected table: string = 'tasks';

    async insertTask(userId: number, description: string, dateEnd: string, status: string) {

        return this.builder
            .table('tasks')
            .insert({
                user_id: userId,
                description: description,
                date_end: moment(dateEnd).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'),
                status: status,
            })
    } 

    async getListsTasks() {
        const query = this.builder
        .select({
            id: 'T.id',
            description: 'T.description',
            dateEnd: 'T.date_end', 
            userId: 'U.id',
            userName: 'U.name'
        })
        .from('tasks AS T')
        .innerJoin('users AS U', 'U.id', 'T.user_id')
        
        return this.exec(query);
    }

}
