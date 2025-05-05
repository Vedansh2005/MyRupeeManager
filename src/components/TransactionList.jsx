import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTransaction } from '../utils/localStorage';

const TransactionList = ({ transactions, onTransactionDeleted }) => {
  const handleDelete = (transactionId) => {
    deleteTransaction(transactionId);
    onTransactionDeleted();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>
      <Paper elevation={2}>
        <List>
          {transactions.length === 0 ? (
            <ListItem>
              <ListItemText primary="No transactions yet" />
            </ListItem>
          ) : (
            transactions.map((transaction) => (
              <ListItem
                key={transaction.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(transaction.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: transaction.amount < 0 ? 'error.main' : 'success.main',
                        fontWeight: 'medium'
                      }}
                    >
                      {formatAmount(transaction.amount)}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {transaction.description}
                      </Typography>
                      {` — ${transaction.category} • ${formatDate(transaction.date)}`}
                    </>
                  }
                />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default TransactionList;