import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

// 📥 Fetch All Students
export const fetchStudents = createAsyncThunk(
  'students/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/students');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Error fetching students');
    }
  }
);

// ➕ Add Student
export const addStudent = createAsyncThunk(
  'students/add',
  async (student, { rejectWithValue }) => {
    try {
      const res = await api.post('/students', student);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Error adding student');
    }
  }
);

// ✏️ Update Student
export const updateStudent = createAsyncThunk(
  'students/update',
  async (student, { rejectWithValue }) => {
    try {
      const res = await api.put(`/students/${student.id}`, student);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Error updating student');
    }
  }
);

// ❌ Delete Student
export const deleteStudent = createAsyncThunk(
  'students/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/students/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Error deleting student');
    }
  }
);

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addStudent.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      // UPDATE
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.data.findIndex(s => s.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.data = state.data.filter(s => s.id !== action.payload);
      });
  }
});

export default studentSlice.reducer;
