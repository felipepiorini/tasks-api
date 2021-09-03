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

   

}
