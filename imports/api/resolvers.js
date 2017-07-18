import { Students } from '/imports/collections'
// import { SQLStudents } from '/imports/data/oracle-connector'
import { OracleStudent, OracleStudentID } from '/imports/data/oracledb'
import { GetMachineExam, GetStudentFile } from '/imports/data/openAPI'

export const resolvers = {
  Query: {
    test(root, args, context) {
      return JSON.stringify({
        context: context,
        args: args
      })
    },
    hello(root, args, context) {
      return "hello world!"
    },
    async currentUser(root, args, context) {
      if (context.userId) {
        // console.log(Meteor.users.findOne(context.userId))
        return {
          string: 'hello world',
          userInfo: await Meteor.users.findOne(context.userId)
        };
      }
      return null
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
