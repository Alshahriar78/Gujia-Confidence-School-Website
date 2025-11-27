
export function sampleStudents(){
  return [
    {id:1,name:'Ahsan',present:true},
    {id:2,name:'Bithi',present:true},
    {id:3,name:'Chand',present:false},
    {id:4,name:'Dipu',present:true},
    {id:5,name:'Esha',present:true},
  ]
}

export function sampleStudentsForResults(){
  return [
    {id:1,name:'Ahsan', subjects:[{key:'eng',name:'English',marks:{term1:78,term2:82,term3:80}},{key:'math',name:'Mathematics',marks:{term1:85,term2:88,term3:90}},{key:'sci',name:'Science',marks:{term1:75,term2:78}}]},
    {id:2,name:'Bithi', subjects:[{key:'eng',name:'English',marks:{term1:68,term2:72,term3:70}},{key:'math',name:'Mathematics',marks:{term1:55,term2:60,term3:65}},{key:'sci',name:'Science',marks:{term1:70,term2:75}}]},
    {id:3,name:'Chand', subjects:[{key:'eng',name:'English',marks:{term1:88,term2:92,term3:90}},{key:'math',name:'Mathematics',marks:{term1:95,term2:98,term3:99}},{key:'sci',name:'Science',marks:{term1:85,term2:82}}]},
  ]
}