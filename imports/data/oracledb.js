let oracledb = require('oracledb');

// release connection after fetching all the data needed
let doRelease = function (connection)
{
  connection.close(
    function(err)
    {
      if (err) { console.error(err.message); }
    });
}

let doClose = function (connection, resultSet)
{
  resultSet.close(
    function(err)
    {
      if (err) { console.error(err.message); }
      doRelease(connection);
    });
}

// two methods for oracledb-node
// query student by batchcode
export const OracleStudent = (batchcode) => {

  const connection = Promise.await(oracledb.getConnection({
      user: 'oems',
      password: 'xjoems',
      connectString: '192.168.200.189/oems'
    }));

  const result = Promise.await(connection.execute("SELECT * FROM STUDENTINFO_V where recruitbatchcode = " + batchcode,
  [],
    {
      outFormat: oracledb.OBJECT,
      resultSet: true
     },
  ))

  const resultSet = result.resultSet
  let queryingPro = true
  let queryingResult = []

  // while loop breaks when there is no more data in resultset, however the while will run once more to break it, therefore the counter is init at -1
  let counter = -1

  while (queryingPro) {
    let singleRow = Promise.await(result.resultSet.getRow())
    if (singleRow) {
      queryingResult.push(singleRow)
    } else {
      queryingPro = false
    }
    counter += 1
  }

  doClose(connection, resultSet);

  return queryingResult

}

// query student via ID
export const OracleStudentID = (id) => {

  const connection = Promise.await(oracledb.getConnection({
      user: 'oems',
      password: 'xjoems',
      connectString: '192.168.200.189/oems'
    }));

  const result = Promise.await(connection.execute("SELECT * FROM STUDENTINFO_V where CERTIFICATENO = :id",
  [id],
    {
      outFormat: oracledb.OBJECT,
      resultSet: true
     },
  ))

  const resultSet = result.resultSet
  let queryingPro = true
  let queryingResult = []

  // while loop breaks when there is no more data in resultset, however the while will run once more to break it, therefore the counter is init at -1
  let counter = -1

  while (queryingPro) {
    let singleRow = Promise.await(result.resultSet.getRow())
    if (singleRow) {
      queryingResult.push(singleRow)
    } else {
      queryingPro = false
    }
    counter += 1
  }

  doClose(connection, resultSet);

  return queryingResult

}
