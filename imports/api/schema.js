export const typeDefs = `
type Query {
  test: String
  hello: String
  currentUser: CurrentUser
  OpenID(id: String): [OpenStudent]
  OpenOne: OpenStudent
  XueliBatch(batchcode: Int): [XueliStudent]
  XueliID(id: String): [XueliStudent]
  GetMachineExam(id: String, batchcode: Int): String
  GetStudentFile(id: String, batchcode: Int): String
}

type CurrentUser {
  string: String
  userInfo: UserInfo
}

type UserInfo {
  _id: String
  createdAt: String
  services: Password
  emails: [Emails]
  profile: String
}

type Password {
  password: Bcrypt
  resume: LoginTokens
}

type Bcrypt {
  bcrypt: String
}

type LoginTokens {
  loginTokens: [loginToken]
}

type loginToken {
  when: String
  hashedToken: String
}

type Emails {
  address: String
  verified: Boolean
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
  StudentFile: OpenAPIStudentFile
  MachineExam: OpenAPIMachineExam
}

type OpenAPIStudentFile {
  state: String
  data: StudentFileData
}

type OpenAPIMachineExam {
  state: String
  data: MachineExamData
}

type StudentFileData {
  count: Int
  dataList: [StudentFileObj]
}

type MachineExamData {
  count: Int
  dataList: [MachineExamObj]
}

type StudentFileObj {
  batchcode: String
  studentcode: String
  certificateno: String
  filetype: String
  doccontent: String
  filesize: String
  lastdate: String
  filename: String
}

type MachineExamObj {
  BATCHCODE: String
  STUDENTCODE: String
  REALNAME: String
  CERTIFICATENO: String
  SUBJECTNAME: String
  SCORE: Int
  EXAMTIME: String
}

`;
