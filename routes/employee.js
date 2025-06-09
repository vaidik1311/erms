const { employeeController } = require("../controller/employee");

module.exports = (app, router) => {
  router.get("/employees", employeeController.getEmployees);
  router.post("/employees", employeeController.createEmployee);
  router.put("/employees/:u_id", employeeController.updateEmployee);
  router.delete("/employees/:u_id", employeeController.deleteEmployee);

  app.use("/api", router);
};
