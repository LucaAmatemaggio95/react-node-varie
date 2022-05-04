// controller people -> metto tutte le funzioni delle chiamate

const { Connection } = require('tedious');

// req e res vengono passate come riferimento
const config = {  
    server: 'CERLBI00.emea.bosch.com',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'checklist_user', //update me
            password: 'Cambiami12345!'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: 'DBSurveys',  //update me
        instanceName: 'BI',
        enableArithAbort: true
    }
};

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: true})
}

const getTest = (req, res) => {

    const sql = require('mssql');
    const id = 5;// può essere passato in req
  
    sql.connect(config).then(() => {
        return sql.query`select * from [DBSurveys].[dbo].[Book] where id = ${id}`
    })
    .then(result => {
        console.log(result);
        res.status(200).json({success: true, data: result.recordset});
    })
    .catch(err => {
        console.log(err);
    })

    sql.on('error', err => {
        console.log(err);
    })

}

const postBook = (req, res) => {

    const sql = require('mssql');
   
    sql.connect(config).then(() => {
        return sql.query(`insert into [DBSurveys].[dbo].[Book] ([Name], [Author], [ISBN]) values (${req.body.Name},'${req.body.Author}',${req.body.ISBN})`)
    })
    .then(result => {
        console.log(result);
        res.status(200).json({success: true, data: result.recordset});
    })
    .catch(err => {
        console.log(err);
    })

    sql.on('error', err => {
        console.log(err);
    })

}

module.exports = {
    getPeople,
    getTest,
    postBook
    /*
        lista di tutte le funzioni del controller
    */

}