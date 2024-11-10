const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h2>HI</h2>"); // ตรวจสอบว่าการเข้าถึง res ถูกต้อง
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
