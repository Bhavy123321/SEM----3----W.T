// const child_process = require('child_process');
// child_process.exec("dir",(err,stdout,stdin)=>{
//     if(err) throw Error;
//     console.log(stdout);
// });

const child_process = require('child_process');
child_process.exec("java demoJava.java",(err,stdout,stdin)=>{
    if(err) throw Error;
    console.log(stdout);
}); 