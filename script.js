// 26
// const arr = [1, 32, 5, 6, 3]
// arr.forEach((x,i)=> x % 2 === 1 ? console.log(i):null)
//27
// const arr = [1, 32, 5, 6, 3]
// arr.forEach((x,i)=> x % 2 === 0 ? console.log(i):null)
//28
// const arr = [1, 32, 5, 6, 3]
// arr.forEach((x,i)=> i % 2 === 1 ? console.log(x):null)
//29
// const arr = [1, 32, 5, 6, 3]
// arr.forEach((x,i)=> i % 2 === 0 ? console.log(x):null)
// 30
// console.log(Math.max(2,4,77));
// 31
// console.log(Math.min(2,4,77));
//32
// const arr = [1, 32, 5, 6, 3]
// console.log(Math.max(...arr.filter((x)=> x % 2 === 1)));
// 33
// const arr=[1,2,3,4,5]
// console.log(Math.min(...arr.filter((x)=>x%2===0)));
//34
// const arr=[1,2,3,4,5]
// console.log(Math.max(...arr.filter((x)=>x%2===1)));
//35
// const arr=[1,2,3,4,5]
// console.log(Math.min(...arr.filter((x)=>x%2===1)));
//36
// const arr=[1,2,3,4,5]
// console.log((arr.indexOf(Math.min(...arr))));
//37
// const arr=[1,2,3,4,5]
// console.log((arr.indexOf(Math.max(...arr))));
//38
// arr=[1,2,5,5,5,5,3]
// let max=Math.max(...arr)
// count=0
// arr.forEach(x => (x===max) ? count++ : null);
// console.log(count);
// 39
// arr=[1,1,1,1,1,2,5,5,5,5,3]
// let min=Math.min(...arr)
// count=0
// arr.forEach(x => (x===min) ? count++ : null);
// console.log(count);
//40
// let arr=[1,2,3,4,5]
// let maxIndex=arr.indexOf(Math.max(...arr))
// let firstElement=arr[0]
// arr[0]=arr[maxIndex];
// arr[maxIndex]=firstElement;
// console.log(arr);
// 41
// let arr=[47,1,2,3,4,5]
// let minIndex=arr.indexOf(Math.min(...arr))
// let firstElement=arr[0]
// arr[0]=arr[minIndex];
// arr[minIndex]=firstElement;
// console.log(arr);
// 42
// let arr=[1,2,3,4,5]
// let minIndex=arr.indexOf(Math.min(...arr))
// let maxIndex=arr.indexOf(Math.max(...arr));
// [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]]
// console.log(arr)
//43
// let arr=[11,2,3,4,5,6]
// let cutIndex=arr.indexOf(Math.max(...arr.filter((x)=> x % 2 === 1)))
// let tekIndex=arr.indexOf(Math.min(...arr.filter((x)=> x % 2 === 1)));
// [arr[tekIndex], arr[cutIndex]] = [arr[cutIndex], arr[tekIndex]]
// console.log(arr);
