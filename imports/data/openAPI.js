const appKey = '0267B15D11764864AA517BB791D8B30D'

// md5 for open auth
const EncryptAuthorInformation = () => {
  let dateNow = moment()
  let hour = dateNow.hour()
  let day = dateNow.date()
  let dayOfYear = dateNow.dayOfYear()

  let value = 'asdf1.23' + hour.toString() + day.toString() + dayOfYear.toString()

  let result = CryptoJS.MD5(value).toString().toUpperCase()

  return result
}

httpGetAsync = (url, options) =>
    new Promise((resolve, reject) => {
        HTTP.get(url, options, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });

// query student exam result
export const GetMachineExam = (batchcode, certificateno) => {

  let url = `http://apitest.openonline.com.cn/api/MachineExam/GetMachineExam?appKey=${appKey} &batchcode=${batchcode}&certificateno=${certificateno}`

  try {
    const result = Promise.await(httpGetAsync(
      url,
      {headers: { key: EncryptAuthorInformation()}}
    ))

    console.log(result.data)

    return result.data

  } catch (err) {

    console.log(err)

  }

}

// query student exam result
export const GetStudentFile = (batchcode, certificateno) => {

  let url = `http://apitest.openonline.com.cn/api/GetStudentFile/GetStudentFileInfo?appKey=${appKey}&batchCode=${batchcode}&certificateNo=${certificateno}`

  try {
    const result = Promise.await(httpGetAsync(
      url,
      {headers: { key: EncryptAuthorInformation()}}
    ))

    console.log(result.data)

    return result.data

  } catch (err) {

    console.log(err)

  }

}
