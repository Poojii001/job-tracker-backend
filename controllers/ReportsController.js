const Jobs = require("../models/Jobs");
const Reports = require("../models/Reports");

// ➡️ Generate and Save Report
async function generateReport(req, res) {
  try {
    let jobs = await Jobs.find();

    // Summary
    let totalJobs = jobs.length;
    let activeJobs = jobs.filter(job => job.status).length;
    let inactiveJobs = totalJobs - activeJobs;

    // Salary Distribution
    let lowSalary = jobs.filter(job => job.salary && job.salary < 30000).length;
    let midSalary = jobs.filter(job => job.salary && job.salary >= 30000 && job.salary < 60000).length;
    let highSalary = jobs.filter(job => job.salary && job.salary >= 60000).length;

    // Company-wise
    let companyMap = {};
    jobs.forEach(job => {
      if (job.company) {
        companyMap[job.company] = (companyMap[job.company] || 0) + 1;
      }
    });

    // Location-wise
    let locationMap = {};
    jobs.forEach(job => {
      if (job.location) {
        locationMap[job.location] = (locationMap[job.location] || 0) + 1;
      }
    });

    // Time-series
    let dateMap = {};
    jobs.forEach(job => {
      if (job.postedDate) {
        let date = new Date(job.postedDate).toLocaleDateString();
        dateMap[date] = (dateMap[date] || 0) + 1;
      }
    });

    // Save Report Snapshot
    let report = new Reports({
      totalJobs,
      activeJobs,
      inactiveJobs,
      lowSalary,
      midSalary,
      highSalary,
      companyWise: companyMap,
      locationWise: locationMap,
      timeSeries: dateMap
    });

    await report.save();

    res.send({ result: "Done", data: report });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Get All Reports (History)
async function getReports(req, res) {
  try {
    let reports = await Reports.find().sort({ createdAt: -1 });
    res.send({ result: "Done", count: reports.length, data: reports });
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

// ➡️ Get Single Report by ID
async function getReportById(req, res) {
  try {
    let report = await Reports.findById(req.params._id);
    if (report) {
      res.send({ result: "Done", data: report });
    } else {
      res.status(404).send({ result: "Fail", reason: "Report Not Found" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", reason: error.message });
  }
}

module.exports = {
  generateReport,
  getReports,
  getReportById
};
