function savePlayerData(){

let score=
stats.decision +
stats.health +
stats.social -
stats.risk

let data=JSON.parse(localStorage.getItem("players")||"[]")

data.push({

player:playerName,
school:schoolName,
score:score,
stats:stats,
time:Date.now()

})

localStorage.setItem("players",JSON.stringify(data))

}function calculateSchoolRanking(){

let players=
JSON.parse(localStorage.getItem("players")||"[]")

let schools={}

players.forEach(p=>{

if(!schools[p.school]){

schools[p.school]={

totalScore:0,
count:0

}

}

schools[p.school].totalScore+=p.score
schools[p.school].count++

})

let ranking=[]

for(let s in schools){

ranking.push({

school:s,
avgScore:
schools[s].totalScore /
schools[s].count,

players:schools[s].count

})

}

ranking.sort((a,b)=>b.avgScore-a.avgScore)

return ranking

}function showSchoolLeaderboard(){

let ranking=calculateSchoolRanking()

let html="<h2>School Ranking</h2>"

ranking.forEach((r,i)=>{

html+=`
<div>

<b>${i+1}. ${r.school}</b>

<br>
Average Score: ${r.avgScore.toFixed(1)}

<br>
Players: ${r.players}

</div>
<hr>
`

})

document.getElementById("leaderboard").innerHTML=html

}function findPlayerSchoolRank(){

let ranking=calculateSchoolRanking()

let rank=
ranking.findIndex(
r=>r.school===schoolName
)

return rank+1

}let schoolRank=findPlayerSchoolRank()

document.getElementById("profile").innerHTML+=

"<h3>โรงเรียนของคุณอยู่อันดับ: "
+schoolRank+
"</h3>"#leaderboard{

max-height:400px;
overflow-y:auto;
background:#020617;
padding:20px;
border-radius:10px;

}
