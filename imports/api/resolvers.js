import { Students } from '/imports/collections'
// import { SQLStudents } from '/imports/data/oracle-connector'
import { OracleStudent, OracleStudentID } from '/imports/data/oracledb'
import { GetMachineExam, GetStudentFile } from '/imports/data/openAPI'

export const resolvers = {
  Query: {
    hello(root, args, context) {
      return 'hello world';
    },
    OpenID: (root, {id}) => {
      return Students.find({CERTIFICATENO:id}).fetch()
    },
    OpenOne: (root, args, content) => {
      return Students.findOne({})
    },
    XueliBatch: (root, {batchcode}) => {
      return OracleStudent(batchcode)
    },
    XueliID: (root, {id}) => {
      return OracleStudentID(id)
    },
    GetMachineExam: (root, {batchcode, id}) => {
      return JSON.stringify(GetMachineExam(batchcode, id))
    },
    GetStudentFile: (root, {batchcode, id}) => {
      return JSON.stringify(GetStudentFile(batchcode, id))
    }
  },
  OpenStudent: {
    StudentFile: ({RECRUITBATCHNAME, CERTIFICATENO}) => {
      return GetStudentFile(RECRUITBATCHNAME, CERTIFICATENO)
    },
    MachineExam: ({RECRUITBATCHNAME, CERTIFICATENO}) => {
      return GetMachineExam(RECRUITBATCHNAME, CERTIFICATENO)
    }
  }
}
