/* 

Materi 31: Label

🤔 Pemahaman Dasar: Label adalah cara kita memberi nama pada sebuah loop. Ini jarang 
digunakan, tapi sangat berguna jika kamu punya loop di dalam loop (nested loop) dan kamu 
ingin break atau continue pada loop yang di luar, bukan yang di dalam.

*/

loopLuar: for (let i = 1; i <= 3; i++) {
    loopDalam: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break loopLuar;
        }
        console.log(`i=${i}, j=${j}`);
    }
    
}