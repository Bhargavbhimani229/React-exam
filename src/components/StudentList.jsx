import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../redux/studentSlice';
import { Link } from 'react-router-dom';
import './StudentList.css'; 
import { AiFillSignature, AiTwotonePlaySquare } from 'react-icons/ai';

const StudentList = () => {
  const dispatch = useDispatch();
  const { data: students, loading } = useSelector((state) => state.students);
  const [sortKey, setSortKey] = useState('name');
  const [filterClass, setFilterClass] = useState('');

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const sortedStudents = [...students]
    .filter(s => filterClass ? s.class.toLowerCase() === filterClass.toLowerCase() : true)
    .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Student List</h3>
        <div>
          <select className="form-select d-inline w-auto me-2" value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="roll">Sort by Roll</option>
          </select>
          <input
            className="form-control d-inline w-auto"
            placeholder="Filter by Class"
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {sortedStudents.map((student) => (
            <div key={student.id} className="col-md-4 mb-4">
              <div className="student-card p-4 h-100 rounded shadow-sm">
                <h5 className="fw-bold">Name: {student.name}</h5>
                <span className=" text-dark me-2 fw-medium">Roll: {student.roll}</span> <br />
                <span className="text-dark me-2 fw-medium ">Class: {student.class}</span>
                <div className="mt-3 d-flex gap-2">
                  <Link to={`/student/${student.id}`} className="btn btn-sm btn-outline-primary"><AiTwotonePlaySquare />View</Link>
                  <Link to={`/edit/${student.id}`} className="btn btn-sm btn-outline-secondary"><AiFillSignature />Edit</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
