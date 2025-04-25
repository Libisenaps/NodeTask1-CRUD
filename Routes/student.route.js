
const express = require("express");
const {
    getStudents,
    getStudent,
    createStudent,
    updatedStudent,
    deleteStudent
} = require('../controllers/students.controllers');

const router = express.Router();

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updatedStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
