//连接数据库
var mysql = require('mysql');
var sql = require('./sql.json');


export default class PlantSql {
    constructor(host,user,password,database) {
        var connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
        connection.connect(function (err) {
            if (err) {
                console.error('error connecting' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });
        this.connection = connection;
    }

    static connectionClose(){
        connection.end();
    }

    sqlQuery(table) {
        var connection = this.connection,
            tableObject = require('./'+table+'.json');
        this.selectAll = ()=>{
            //查询
            connection.query(tableObject.selectAll,(err, rows, fields) =>{
                if (err) throw err;
                console.log('The solution is: ', rows);
                return rows;
            });
        };

        this.save = (accountObject)=>{
            if(!accountObject) throw new Error('accountObject is not defined');
            connection.query(tableObject.save,accountObject,(err, rows, fields) =>{
                if (err) throw err;
                console.log('insert success.');
            });
        };

        this.update = (array)=>{
            if(array.length<1) throw new Error('accountObject is not defined');
            connection.query(tableObject.update,array,(err, rows, fields) =>{
                if (err) throw err;
                console.log('update success.');
            });
        };

        this.delete = (id) =>{
            if(typeof id !=='number' || isNAN(id)) throw new Error("id is not a number");
            connection.query(tableObject.delete,id,(err, rows, fields) =>{
                if (err) throw err;
                console.log('delete success.');
            });
        }
    }

}
