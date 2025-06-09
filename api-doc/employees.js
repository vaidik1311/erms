/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Full name of the employee
 *         email:
 *           type: string
 *           description: Email address of the employee
 *         designation:
 *           type: string
 *           description: Job title of the employee
 *         salary:
 *           type: number
 *           format: float
 *           description: Salary of the employee
 *       example:
 *         name: Vaidik thakkar
 *         email: test@example.com
 *         designation: Software Engineer
 *         salary: 75000
 */

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management APIs
 */

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 employees:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Employee created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 newEmployee:
 *                   $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/employees/{u_id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: u_id
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Employee updated successfully
 *       404:
 *         description: Employee not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/employees/{u_id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: u_id
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique ID of the employee
 *     responses:
 *       201:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 *       500:
 *         description: Server error
 */
