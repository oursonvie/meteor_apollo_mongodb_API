export const typeDefs = `
type Query {
  hello: String
  OpenID(id: String): [OpenStudent]
  OpenOne: OpenStudent
  XueliBatch(batchcode: Int): [XueliStudent]
  XueliID(id: String): [XueliStudent]
  GetMachineExam(id: String, batchcode: Int): String
  GetStudentFile(id: String, batchcode: Int): String
}


type XueliStudent {
  _id: String
  REALNAME: String
  SEX: String
  BIRTHDATE: String
  NATION: String
  CERTIFICATETYPE: String
  CERTIFICATENO: String
  MOBILEPHONE: String
  EMAIL: String
  RECRUITBATCHCODE: Int
}

type OpenStudent {
  _id: String
  REALNAME: String
  SEX: String
  BIRTHDATE: String
  NATION: String
  CERTIFICATETYPE: String
  CERTIFICATENO: String
  MOBILEPHONE: String
  EMAIL: String
  RECRUITBATCHNAME: Int
  StudentFile: OpenAPI
  MachineExam: OpenAPI
}

type OpenAPI {
  state: String
  data: Data
}

type Data {
  count: Int
  dataList: [String]
}

`;
