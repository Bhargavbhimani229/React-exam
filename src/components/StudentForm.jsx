import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent, fetchStudents } from '../redux/studentSlice';
import { useNavigate, useParams } from 'react-router-dom';

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { data: students } = useSelector(state => state.students);

  const [formData, setFormData] = useState({ name: '', roll: '', class: '' });

  useEffect(() => {
    if (!students.length) dispatch(fetchStudents());
  }, [dispatch, students.length]);

  useEffect(() => {
    if (isEdit) {
      const student = students.find((s) => s.id.toString() === id);
      if (student) setFormData(student);
    }
  }, [isEdit, id, students]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateStudent(formData));
    } else {
      dispatch(addStudent(formData));
    }
    navigate('/');
  };

  return (
    <div className="card p-4 shadow-sm w-50 mx-auto">
      <h4>{isEdit ? 'Edit Student' : 'Add New Student'}</h4>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Roll</label>
          <input className="form-control" name="roll" value={formData.roll} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Class</label>
          <input className="form-control" name="class" value={formData.class} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">{isEdit ? 'Update' : 'Add'} Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
