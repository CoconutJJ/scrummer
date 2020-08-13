
import MySQLDriver from '../../db/mysql-driver';
import DBUtils from '../../db/db-utils';
import {ITicket} from '../../interfaces/Ticket.interface'
namespace Models {


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

export default Models
