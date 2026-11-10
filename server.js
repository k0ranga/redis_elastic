require('dotenv').config(); 

const express = require('express');
const app = express();

// Access variables using process.env
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/health', (req, res) => {
    const message = {
        success: true,
        message: "working"
    };

    return res.status(200).json(message);
});
