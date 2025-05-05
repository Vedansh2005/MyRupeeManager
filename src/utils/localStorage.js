const STORAGE_KEY = 'pfm_data';

const defaultData = {
  transactions: [],
  categories: [
    'Housing',
    'Transportation',
    'Food',
    'Utilities',
    'Insurance',
    'Healthcare',
    'Savings',
    'Personal',
    'Entertainment',
    'Other'
  ],
  budget: {}
};

export const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  }
  return getStorageData();
};

export const getStorageData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(data);
};

export const updateStorage = (newData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
};

export const addTransaction = (transaction) => {
  const data = getStorageData();
  data.transactions.push({
    ...transaction,
    id: Date.now().toString(),
    date: new Date().toISOString()
  });
  updateStorage(data);
  return data;
};

export const updateTransaction = (transactionId, updatedTransaction) => {
  const data = getStorageData();
  data.transactions = data.transactions.map(transaction =>
    transaction.id === transactionId ? { ...transaction, ...updatedTransaction } : transaction
  );
  updateStorage(data);
  return data;
};

export const deleteTransaction = (transactionId) => {
  const data = getStorageData();
  data.transactions = data.transactions.filter(transaction => transaction.id !== transactionId);
  updateStorage(data);
  return data;
};

export const updateBudget = (category, amount) => {
  const data = getStorageData();
  data.budget[category] = amount;
  updateStorage(data);
  return data;
};