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
<title>GitHub Actions CI/CD Deployment</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#1e293b,#2563eb);
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    color:white;
}

.container{
    width:90%;
    max-width:900px;
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(10px);
    border-radius:20px;
    padding:40px;
    text-align:center;
    box-shadow:0 15px 40px rgba(0,0,0,.4);
}

h1{
    font-size:42px;
    margin-bottom:20px;
}

p{
    font-size:20px;
    margin-bottom:20px;
    color:#ddd;
}

.success{
    color:#00ff99;
    font-weight:bold;
}

.info{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:20px;
    margin-top:35px;
}

.card{
    background:rgba(255,255,255,.1);
    padding:25px;
    border-radius:15px;
    transition:.4s;
}

.card:hover{
    transform:translateY(-10px);
    background:#2563eb;
}

.card h2{
    margin-bottom:10px;
}

.footer{
    margin-top:40px;
    color:#bbb;
}

button{
    margin-top:25px;
    padding:15px 30px;
    font-size:18px;
    border:none;
    border-radius:30px;
    background:#00ff99;
    cursor:pointer;
    transition:.3s;
    font-weight:bold;
}

button:hover{
    background:#fff;
    color:#2563eb;
}
</style>

</head>
<body>

<div class="container">

<h1>🚀 GitHub Actions CI/CD Pipeline</h1>

<p class="success">
Deployment Successful!
</p>

<p>
This website is automatically deployed using
GitHub Actions + Docker + Express.js
</p>

<button onclick="showMessage()">Check Status</button>

<div class="info">

<div class="card">
<h2>🐳 Docker</h2>
<p>Containerized Application</p>
</div>

<div class="card">
<h2>⚙ GitHub Actions</h2>
<p>CI/CD Automation</p>
</div>

<div class="card">
<h2>🟢 Express.js</h2>
<p>Node.js Web Server</p>
</div>

<div class="card">
<h2>☁ AWS EC2</h2>
<p>Production Deployment</p>
</div>

</div>

<div class="footer">
<p id="status">
Build Status : Success ✅
</p>

<p id="time"></p>
</div>

</div>

<script>

function showMessage(){
    alert("🎉 CI/CD Pipeline is Working Successfully!");
}

function updateTime(){
    const now = new Date();
    document.getElementById("time").innerHTML =
    "Server Time : " + now.toLocaleString();
}

updateTime();
setInterval(updateTime,1000);

</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
