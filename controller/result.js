const Interview = require('../models/interview');
const Student = require('../models/student');
const Result = require('../models/result');

// Display result page for a company's interview
module.exports.resultPage = async function (req, res) {
    const id = req.params.id;
    const companyResult = await Interview.findById(id).populate('students');
    return res.render('result', {
        title: "Result",
        companyResult: companyResult
    });
}

// Update result of a student for a company's interview
module.exports.update = async function (req, res) {
    try {
        // create and save a new Result object
        const updateResult = await Result(req.body);
        await updateResult.save();

        // add the new result to the interview's result array
        const id = req.body.interviewId;
        const interviewResult = await Interview.findById(id);
        const index = interviewResult.result.indexOf(req.body.studentId);
        if (index == -1) {
            interviewResult.result.push(req.body.studentId);
            await interviewResult.save();
        }

         // if the result is a pass, update the student's status to placed
        if (req.body.result == "PASS") {
            const studentId = req.body.studentId;
            const studentPresent = await Student.findById(studentId);
            studentPresent.status = "Placed";
            await studentPresent.save();
            req.flash('success', 'Status Updated !!');
        }
        req.flash('success', 'Result Updated !!');
        return res.redirect('back');
    } 
    // catch (error) {
    //     return res.send("Error in updating data",error)
    // }
    catch (error) {
        return res.status(500).send("Error in updating data" + error);
    }
     
}