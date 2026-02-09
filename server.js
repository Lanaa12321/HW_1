const express = require("express");
const app = express();

app.use(express.text({ type: "*/*" }));

app.post("/echo", (req, res) => {
  res.status(200).send(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
