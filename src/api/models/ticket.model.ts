
import MySQLDriver from '../../db/mysql-driver'
import DBUtils from '../../db/db-utils';
export namespace Models {


    interface ITicket {
        title: string,
        description: string,
        reporter: string,
        issue_type: string,
        assignee: string,
        story_points: string,
        priority: string,
        due_date: string,
        attachments: [Blob]
    }

    export class Ticket {

        private dbh: MySQLDriver;

        constructor() {
            this.dbh = MySQLDriver.getDriver();
        }

        public async createTicket(ticket: ITicket): Promise<boolean> {

            let [columns, params, values] = DBUtils.createNameParamValueArrays(ticket);

            columns = columns.map((v) => "`" + v + "`")

            try {
                const _ = await this.dbh.query(
                    "INSERT INTO ticket " +
                    "(" + columns.join(",") + ")" +
                    "VALUES" +
                    "(" + params.join(",") + ")",

                    values
                );
                return true;
            }
            catch (e) {
                return false;
            }

        }

        public async deleteTicket(ticketID: number) {

            try {
                await this.dbh.query(
                    "DELETE FROM tickets WHERE id = ?", [ticketID]
                )
                
                return true

            } catch (e) {

                return false

            }


        }

        
        

    }
}

