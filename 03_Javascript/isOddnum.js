const lion = {  
  name : '사자' 
};  

const bravelion = {  
  ...lion,
  attribute : 'brave' 
};  

const bravelikelion = { 
  name : '사자', 
  attribute : 'brave',
  color : 'yellow',
  age : 12,

};


const number = [1,2,3,4,5]

const [one, ...gaeun] = number;
console.log(one);
console.log(gaeun);