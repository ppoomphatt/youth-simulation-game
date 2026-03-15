function getEnding(stats){

let ending=""

if(stats.risk<20 && stats.decision>60){

ending="Youth Leader Ending"

}

else if(stats.health>70){

ending="Healthy Future Ending"

}

else if(stats.social>70){

ending="Community Influencer Ending"

}

else if(stats.risk>70){

ending="Danger Zone Ending"

}

else if(stats.decision>75){

ending="Future Strategist Ending"

}

else if(stats.social>60 && stats.risk>40){

ending="Party Network Ending"

}

else if(stats.health>60 && stats.decision>60){

ending="Balanced Life Ending"

}

else if(stats.risk>50){

ending="Risk Taker Ending"

}

else if(stats.social<40){

ending="Independent Path Ending"

}

else{

ending="Uncertain Journey Ending"

}

return ending

}
