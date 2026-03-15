const scenarios=[

{
story:"เพื่อนชวนคุณไปงานปาร์ตี้ก่อนสอบใหญ่",

choices:[
{text:"ไปแต่ไม่ดื่ม",effect:{decision:5,social:5}},
{text:"ดื่มเล็กน้อย",effect:{risk:10,health:-5}},
{text:"ไม่ไป",effect:{decision:10}}
]

},

{
story:"เพื่อนล้อว่าคุณไม่กล้าดื่ม",

choices:[
{text:"ดื่มเพื่อพิสูจน์",effect:{risk:20}},
{text:"ปฏิเสธอย่างสุภาพ",effect:{decision:10}},
{text:"หัวเราะแล้วเปลี่ยนเรื่อง",effect:{social:5}}
]

},

{
story:"เพื่อนเมาและจะขับรถกลับ",

choices:[
{text:"ปล่อยเขาไป",effect:{risk:25}},
{text:"เรียกแท็กซี่ให้",effect:{decision:10}},
{text:"เอากุญแจรถไว้ก่อน",effect:{decision:5,social:-5}}
]

},

{
story:"มีคนถ่ายคลิปในงานปาร์ตี้",

choices:[
{text:"ร่วมถ่ายคลิป",effect:{risk:10}},
{text:"เตือนเพื่อน",effect:{decision:5}},
{text:"เดินออกจากเหตุการณ์",effect:{health:5}}
]

},

{
story:"เพื่อนสนิทเริ่มดื่มเพราะเครียดเรื่องเรียน",

choices:[
{text:"ปล่อยเขา",effect:{risk:5}},
{text:"คุยกับเขา",effect:{decision:10}},
{text:"ชวนไปทำกิจกรรมอื่น",effect:{health:10}}
]

},

{
story:"เพื่อนชวนแข่งดื่ม",

choices:[
{text:"แข่ง",effect:{risk:30,health:-10}},
{text:"ปฏิเสธ",effect:{decision:10}},
{text:"ชวนเล่นเกมแทน",effect:{social:10}}
]

},

{
story:"เพื่อนขอให้คุณซื้อเครื่องดื่มให้",

choices:[
{text:"ซื้อให้",effect:{risk:10}},
{text:"ปฏิเสธ",effect:{decision:10}},
{text:"แนะนำเครื่องดื่มอื่น",effect:{health:5}}
]

},

{
story:"มีคนแปลกหน้าชวนคุณดื่ม",

choices:[
{text:"ลองดื่ม",effect:{risk:15}},
{text:"ปฏิเสธ",effect:{decision:10}},
{text:"เดินออกมา",effect:{health:5}}
]

},

{
story:"เพื่อนทะเลาะกันในงาน",

choices:[
{text:"เข้าไปยุ่ง",effect:{risk:10}},
{text:"พยายามห้าม",effect:{decision:10}},
{text:"ออกจากสถานการณ์",effect:{health:5}}
]

},

{
story:"เพื่อนเริ่มอาเจียนเพราะดื่มมาก",

choices:[
{text:"ปล่อย",effect:{risk:10}},
{text:"ช่วยดูแล",effect:{decision:10}},
{text:"เรียกผู้ใหญ่",effect:{decision:8}}
]

},

{
story:"คุณถูกชวนให้ลองเครื่องดื่มใหม่",

choices:[
{text:"ลอง",effect:{risk:10}},
{text:"ปฏิเสธ",effect:{decision:10}},
{text:"ดื่มน้ำแทน",effect:{health:5}}
]

},

{
story:"เพื่อนบอกว่าคุณทำให้บรรยากาศเสีย",

choices:[
{text:"ดื่มตาม",effect:{risk:20}},
{text:"อธิบายเหตุผล",effect:{decision:10}},
{text:"เปลี่ยนกิจกรรม",effect:{social:10}}
]

},

{
story:"มีงานเลี้ยงวันเกิด",

choices:[
{text:"ดื่มตามเพื่อน",effect:{risk:15}},
{text:"ดื่มน้ำอัดลม",effect:{health:5}},
{text:"ช่วยดูแลเพื่อน",effect:{decision:10}}
]

},

{
story:"เพื่อนขอให้เก็บความลับเรื่องดื่ม",

choices:[
{text:"รับปาก",effect:{social:5}},
{text:"บอกว่าไม่สบายใจ",effect:{decision:5}},
{text:"แนะนำให้หยุด",effect:{decision:10}}
]

},

{
story:"คุณเห็นเพื่อนเริ่มติดการดื่ม",

choices:[
{text:"ไม่ยุ่ง",effect:{risk:5}},
{text:"ชวนทำกิจกรรมอื่น",effect:{health:10}},
{text:"คุยกับผู้ใหญ่",effect:{decision:10}}
]

},

{
story:"มีคนโพสต์ภาพเมาในโซเชียล",

choices:[
{text:"หัวเราะ",effect:{social:5}},
{text:"เตือนเพื่อน",effect:{decision:10}},
{text:"รายงานโพสต์",effect:{decision:8}}
]

},

{
story:"เพื่อนชวนไป After Party",

choices:[
{text:"ไป",effect:{risk:10}},
{text:"กลับบ้าน",effect:{health:10}},
{text:"ชวนเพื่อนไปกินข้าวแทน",effect:{social:10}}
]

},

{
story:"คุณเห็นเพื่อนขับรถหลังดื่ม",

choices:[
{text:"ไม่พูดอะไร",effect:{risk:20}},
{text:"ห้าม",effect:{decision:10}},
{text:"โทรเรียกผู้ใหญ่",effect:{decision:8}}
]

},

{
story:"มีการแข่งขันกีฬาโรงเรียน",

choices:[
{text:"ดื่มก่อนแข่ง",effect:{health:-10}},
{text:"ไม่ดื่ม",effect:{health:10}},
{text:"เตือนเพื่อน",effect:{decision:10}}
]

},

{
story:"เพื่อนเริ่มดื่มทุกวัน",

choices:[
{text:"ไม่สนใจ",effect:{risk:5}},
{text:"คุยกับเขา",effect:{decision:10}},
{text:"ขอคำปรึกษาครู",effect:{decision:8}}
]

}

]
