import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteStudent } from '../redux/studentSlice';

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector(state => state.students.data.find(s => s.id.toString() === id));

  if (!student) return <p>Student not found</p>;

  const handleDelete = () => {
    dispatch(deleteStudent(student.id));
    navigate('/');
  };

  return (
    <div className="card p-4 shadow w-50 mx-auto">
      <h3>{student.name}</h3>
      <p><strong>Roll:</strong> {student.roll}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default StudentDetails;
