// func1
// function power(a, n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= a;
//     }
//     return result;
//   }
  
//   console.log(power(3, 5));
  
// func2
// function mean(a, b) {
//     const arithmeticMean = (a + b) / 2;
//     const geometricMean = Math.sqrt(a * b);
//     console.log(arithmeticMean, geometricMean);
//   }
  
//   mean(12, 48);
  
// func3
// function sign(n) {
//     if (n < 0) {
//       return -1;
//     } else if (n > 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(sign(10));
  

// func4
// function numberOfRoots(A, B, C) {
//     const D = B * B - 4 * A * C;
//     if (D > 0) {
//       return 2;
//     } else if (D === 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(numberOfRoots(1, -6, 9));
  

// func5
// function areaCircle(R) {
//     const area = Math.PI * R * R;
//     return area;
//   }
  
//   console.log(areaCircle(5));
  

// func6
// function sumRange(A, B) {
//     let sum = 0;
//     if (A > B) {
//       return 0;
//     }
//     for (let i = A; i <= B; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log(sumRange(8, 10));
  

// func7
// function calc(A, B, S) {
//     let result = 0;
//     switch (S) {
//       case "+":
//         result = A + B;
//         break;
//       case "-":
//         result = A - B;
//         break;
//       case "*":
//         result = A * B;
//         break;
//       case "/":
//         result = A / B;
//         break;
//       default:
//         result = 0;
//         break;
//     }
//     return result;
//   }
  
//   console.log(calc(10, 15, "*"));
//   console.log(calc(7, 8, "+"));
  

// func8
// function isEven(K) {
//     return K % 2 === 0;
//   }
  
//   console.log(isEven(10));
  

// func9
// function sortABC(a, b, c) {
//     const min = Math.min(a, b, c);
//     const max = Math.max(a, b, c);
//     const mid = a + b + c - min - max;
//     console.log(min, mid, max);
//   }
  
//   sortABC(10, 5, 8);
  

// func10
// function isPowerN(K, N) {
//     if (K === 1) {
//       return true;
//     }
//     let power = 1;
//     while (power <= K) {
//       if (power === K) {
//         return true;
//       }
//       power *= N;
//     }
//     return false;
//   }
  
//   console.log(isPowerN(16, 2));
  

// func 11
// function isPrime(N) {
//     if (N < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//       if (N % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isPrime(7));
  

// func12
// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//       if (isPrime(i)) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(numberOfPrime(10));
  

// func13
// function digitNth(K, N) {
//     const digitCount = String(K).length;
//     if (N > digitCount) {
//       return -1;
//     }
//     const digit = Math.floor((K / Math.pow(10, N - 1)) % 10);
//     return digit;
//   }
  
//   console.log(digitNth(105782, 5));
//   console.log(digitNth(1057, 5));
  

// func14
// function inverseNumber(N) {
//     let result = 0;
//     let num = N;
//     while (num > 0) {
//       const digit = num % 10;
//       result = result * 10 + digit;
//       num = Math.floor(num / 10);
//     }
//     return result;
//   }
  
//   console.log(inverseNumber(56814));
  

// func15
// function isPalindrom(N) {
//     return N === inverseNumber(N);
//   }
  
//   console.log(isPalindrom(1678761));
  

// func16
// function factorial(N) {
//     if (N < 0) {
//       return 1;
//     }
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//       result *= i;
//     }
//     return result;
//   }
  
//   console.log(factorial(5));
  

// func17
// function getSum3(N) {
//     let sum = 0;
//     for (let i = 3; i <= N; i += 3) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log(getSum3(15));
  

// func18
// function sumOddEven(N) {
//     let sumOdd = 0;
//     let sumEven = 0;
//     for (let i = 1; i <= N; i++) {
//       if (i % 2 === 0) {
//         sumEven += i;
//       } else {
//         sumOdd += i;
//       }
//     }
//     console.log(sumOdd, sumEven);
//   }
  
//   sumOddEven(10);
  

// func19
// function invertTime(H, M, S) {
//     const totalSeconds = H * 3600 + M * 60 + S;
//     return totalSeconds;
//   }
  
//   console.log(invertTime(0, 6, 40));
  

// func20
// function decTime(H, M, S) {
//     const totalSeconds = H * 3600 + M * 60 + S;
//     const previousSecond = totalSeconds - 1;
//     const newTime = new Date(previousSecond * 1000).toISOString().substr(11, 8);
//     return newTime;
//   }
  
//   console.log(decTime(0, 6, 40));
  

// func21
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
//   }
  
//   console.log(isLeapYear(2020));
  

// func22
function monthDays(M, Y) {
    const isLeap = isLeapYear(Y);
    const daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[M - 1];
  }
  
  console.log(monthDays(2, 2020));






