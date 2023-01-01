import axios from "axios";
import { useState } from "react";

import { View,Text,StyleSheet } from "react-native";

export default function Namaz(){

  const [fulld,setfulld] = useState();
  const [faj,setfaj] = useState();
  const [zuhar,setzuhar] =useState();
  const [asr,setasr] = useState();
  const [mag,setmag] = useState();
  const [ish,setish] = useState();


  let dat = new Date();
  let day = dat.getDate();


  
    axios
  .get('http://api.aladhan.com/v1/calendar?latitude=33.768051&longitude=72.360703&method=1&month=`${month}`&year=`${year}`')
      .then(response => {
        setfulld(response.data.data[day-1].date.readable);
        setfaj(response.data.data[day-1].timings.Fajr);
        setzuhar(response.data.data[day-1].timings.Dhuhr);
        setasr(response.data.data[day-1].timings.Asr);
        setmag(response.data.data[day-1].timings.Maghrib);
        setish(response.data.data[day-1].timings.Isha);
        
      }
      )


  
  return(
  <View style={styles.container}>
  <Text>
      the prayers times on your location is 
    </Text>
    <Text>
      {fulld}
    </Text>
    <Text>
      Fajr : {faj}
    </Text>
    <Text>
      Zuhar : {zuhar}
    </Text>
    <Text>
      Asar : {asr}
    </Text>
    <Text>
      Maghrib : {mag}
    </Text>
    <Text>
      Isha : {ish}
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#483d8b",
    
    lineHeight:10
  }
})