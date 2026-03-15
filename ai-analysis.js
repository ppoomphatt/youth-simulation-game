function analyzePlayer(stats){

let profile=""
let description=""

if(stats.risk<15 && stats.decision>60){

profile="Community Protector"

description="คุณมีแนวโน้มปกป้องคนรอบตัวและหลีกเลี่ยงพฤติกรรมเสี่ยง"

}

else if(stats.risk<30 && stats.social>60){

profile="Social Leader"

description="คุณมีอิทธิพลในกลุ่มเพื่อนและสามารถชี้นำสถานการณ์ได้"

}

else if(stats.risk<35 && stats.decision>50){

profile="Balanced Decision Maker"

description="คุณสามารถรักษาสมดุลระหว่างสังคมและความปลอดภัย"

}

else if(stats.social>70){

profile="Peer Driven"

description="การตัดสินใจของคุณได้รับอิทธิพลจากเพื่อนค่อนข้างมาก"

}

else if(stats.risk>60){

profile="High Risk Explorer"

description="คุณมีแนวโน้มทดลองสิ่งเสี่ยงสูง"

}

else if(stats.health>70){

profile="Health Conscious"

description="คุณให้ความสำคัญกับสุขภาพ"

}

else if(stats.decision>70){

profile="Strategic Thinker"

description="คุณมักวิเคราะห์สถานการณ์ก่อนตัดสินใจ"

}

else if(stats.risk>40 && stats.social>60){

profile="Party Seeker"

description="คุณชอบกิจกรรมทางสังคมที่มีความเสี่ยง"

}

else if(stats.decision<40){

profile="Impulsive Actor"

description="คุณตัดสินใจเร็วและบางครั้งไม่ได้คิดรอบด้าน"

}

else if(stats.social<40){

profile="Independent Thinker"

description="คุณไม่ค่อยถูกกดดันจากสังคม"

}

else if(stats.risk<20 && stats.health>60){

profile="Safe Navigator"

description="คุณมักเลือกทางที่ปลอดภัย"

}

else{

profile="Adaptive Player"

description="คุณปรับตัวตามสถานการณ์"

}

return{

profile:profile,
description:description

}

}
