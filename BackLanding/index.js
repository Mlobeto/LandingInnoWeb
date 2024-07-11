const app = require('./app');
const PORT = process.env.PORT || 3001; // Asegúrate de que el puerto predeterminado sea 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
