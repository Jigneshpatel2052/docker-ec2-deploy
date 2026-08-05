const express = require("express");

const app = express();

const PORT = 80;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>Redirecting to GitHub...</title>
    <style>
        body{
            margin:0;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            font-family:Arial,sans-serif;
            background:linear-gradient(135deg,#0f172a,#2563eb);
            color:white;
            text-align:center;
        }
        h1{
            font-size:40px;
        }
        p{
            font-size:20px;
        }
    </style>
</head>
<body>

<div>
    <h1>🚀 Deployment Successful</h1>
    <p>Redirecting to GitHub Profile...</p>
</div>

<script>
setTimeout(function () {
    window.location.href = "https://github.com";
}, 3000);
</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
