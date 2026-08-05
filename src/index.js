const express = require("express");

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GitHub Actions Deployment</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#0f172a,#2563eb);
}

.container{
    text-align:center;
    background:rgba(255,255,255,0.1);
    padding:40px;
    border-radius:15px;
    color:#fff;
    backdrop-filter:blur(10px);
    box-shadow:0 10px 30px rgba(0,0,0,.3);
}

h1{
    margin-bottom:15px;
}

p{
    margin-bottom:25px;
    font-size:18px;
}

.btn{
    display:inline-block;
    padding:15px 35px;
    font-size:18px;
    font-weight:bold;
    color:#fff;
    background:#24292e;
    border:none;
    border-radius:8px;
    cursor:pointer;
    transition:.3s;
}

.btn:hover{
    background:#0366d6;
    transform:scale(1.05);
}
</style>
</head>

<body>

<div class="container">
    <h1>🚀 Deployment Successful</h1>
    <p>Click the button below to visit GitHub.</p>

    <button class="btn" onclick="openGitHub()">
        🐙 Visit GitHub
    </button>
</div>

<script>
function openGitHub() {
    window.open("https://github.com/jigneshpatel2052", "_blank");
}
</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
