const Student = require('../models/student');
const Interview = require('../models/interview');

// render interview page with student list and interview list
module.exports.interviewPage = async function (req, res) {
    const studentList = await Student.find({});
    const interview_list = await Interview.find({});
    return res.render('interview', {
        title: "Interview List",
        studentList: studentList,
        interview_list: interview_list

    });
}

// render interview form for a specific student ID
module.exports.interviewForm = async function (req, res) {
    return res.render('formForInterviewAllocation', {
        title: "Interview Allocation",
        id: req.params.id
    })
}

// handle interview allocation form submission
module.exports.interviewAllocation = async function (req, res) {
    try {
        // check if interview for company already exists
        const companyPresent = await Interview.findOne({ companyName: req.body.companyName });
        if (companyPresent) {
            const id = req.body.studentID;
            const studentPresent = await Student.findById(id);
            const index = studentPresent.interviews.indexOf(companyPresent.id);
            // add interview to student's interview list
            if (index == -1) {
                studentPresent.interviews.push(companyPresent.id);
                await studentPresent.save();
            }
             // add student to company's interview list
            const cindex = companyPresent.students.indexOf(studentPresent.id);
            if (cindex == -1) {
                companyPresent.students.push(studentPresent.id);
                await companyPresent.save();
            }
        } else { // create interview for company and add student to interview list
            const company = await Interview.create({ companyName: req.body.companyName, date: req.body.date });
            const id = req.body.studentID;
            const studentPresent = await Student.findById(id);
            const index = studentPresent.interviews.indexOf(company.id);
            if (index == -1) {
                studentPresent.interviews.push(company.id);
                await studentPresent.save();
            }
            // add student to company's interview list
            const cindex = company.students.indexOf(studentPresent.id);
            if (cindex == -1) {
                company.students.push(studentPresent.id);
                await company.save();
            }
        }
        req.flash('success' , 'Interview Allocate To Student SuccessFully !!')
        return res.redirect('/employee/dashboard');
    } catch (error) {
        return res.send("Error in allocating interview")
    }

}

