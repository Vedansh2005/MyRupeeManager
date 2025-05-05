import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography
} from '@mui/material';
import { addTransaction, getStorageData } from '../utils/localStorage';

const TransactionForm = ({ onTransactionAdded }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: ''
  });

  const { categories } = getStorageData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(formData.amount);
    if (!amount || !formData.description || !formData.category) return;

    const transaction = {
      ...formData,
      amount: formData.type === 'expense' ? -amount : amount
    };

    addTransaction(transaction);
    onTransactionAdded();
    setFormData({
      description: '',
      amount: '',
      type: 'expense',
      category: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Transaction
      </Typography>
      <Box sx={{ display: 'grid', gap: 2 }}>
        <TextField
          required
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          type="number"
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            label="Type"
            name="type"
            onChange={handleChange}
          >
            <MenuItem value="expense">Expense</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            required
            value={formData.category}
            label="Category"
            name="category"
            onChange={handleChange}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Transaction
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionForm;