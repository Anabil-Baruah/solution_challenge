const router = require("express").Router();
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");

router.get(
  "/admin/dashboard/eligibilityCritegia/:employee_id",
  async (req, res) => {
    // const admin = await Admin.findOne({ employee_id: req.params.employee_id });
    const admin = await Admin.find({ });
    res.render("admin/eligibility-list-addition-criteria.ejs", {
      admin: admin,
    });
  }
);

// router.get("/addDummyData", async (req, res) => {
//   try {
//     // Create dummy data
//     const dummyAdmins = [
//       {
//         employee_id: "EMP001",
//         firstName: "John",
//         lastName: "Doe",
//         contactNumber: 1234567890,
//         aadharNumber: 123456789012,
//         email: "john.doe@example.com",
//         password: "password123",
//         autherisation_level: "Level1",
//         registeredBy: "Admin1",
//         eligibilityListCriteria: {
//           ageLessThan2: {
//             timeIntervalForEvaluation: 30,
//             minDaysSinceRegistration: 10,
//             minPresentDaysInCci: 20,
//             averageGuardianVisits: 5,
//             revelenceToBioParents: "High",
//           },
//           ageMoreThan2: {
//             timeIntervalForEvaluation: 45,
//             minDaysSinceRegistration: 15,
//             minPresentDaysInCci: 25,
//             averageGuardianVisits: 7,
//             revelenceToBioParents: "Medium",
//           },
//         },
//       },
//       // Add more dummy data as needed
//     ];

//     // Insert dummy data into MongoDB
//     const result = await Admin.insertMany(dummyAdmins);

//     res.json({ success: true, message: "Dummy data inserted successfully", result });
//   } catch (error) {
//     console.error("Error inserting dummy data:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

router.get("/admin/dashboard/:employee_id", async (req, res) => {
  const admin = await Admin.findOne({ employee_id: req.params.employee_id });
  console.log(admin, "This admin")
  res.render("admin/adminDashboardHome.ejs", { admin: admin });
});

module.exports = router;
