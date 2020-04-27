// const randHex = (len) => {
//     let maxlen = 8,
//         min = Math.pow(16, Math.min(len, maxlen)-1) 
//         max = Math.pow(16, Math.min(len, maxlen)) - 1,
//         n = Math.floor(Math.random() * (max - min )) + min,
//         r = n.toString(16);
//     while ( r.length < len ) {
//        r = r + randHex( len - maxlen );
//     }
//     return r;
//   };


module.exports = (length) => {
    let res = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for ( let i = 0; i < length; i++ ) {
       res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(res);
 }
