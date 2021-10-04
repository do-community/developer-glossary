---
title: "Big-O Notation"
date: 2021-10-04
part-of-speech: noun
synonyms: ["Asymptotic Analysis"]
abbreviations: "Big-O"
---

Evaluation of the time and space efficiency of an algorithm with respect to n-size as n approaches infinity.

Big-O describes the Upper Bound / Worst Case Performance of an algorithm  
and is often simplified to the most dominant mathematical term  
&emsp;e.g.  
&emsp;&emsp;unsimplified: 2n! + x^5 + 500x + 1000 => simplified: O(n!)  
&emsp;&emsp;Approaching infinity, smaller operations have less impact on overall behavior and constants fall away as well

From most efficient to least efficient:  
    &emsp;O(1)                &emsp;&emsp;&emsp;&emsp; Constant  
    &emsp;O(log(n))           &emsp;&emsp;Logarithmic  
    &emsp;O(n)                &emsp;&emsp;&emsp;&emsp;Linear  
    &emsp;O(n*log(n))         &emsp;Log-Linear  
    &emsp;O(n^2)              &emsp;&emsp;&emsp;Polynomial (e.g. Quadratic, Cubic, etc.)  
    &emsp;O(2^n)              &emsp;&emsp;&emsp;Exponential  
    &emsp;O(n!)               &ensp;&emsp;&emsp;&emsp; Factorial

## Example

> O(1) | Constant:  
&emsp;e.g.&emsp;a greeting function that returns "hi, * your_name * " when a name is entered.  
&emsp;&emsp;&emsp;&ensp;a function that returns the current time.  
&emsp;&emsp;&emsp;&ensp;~ a function where the size of the output has no relationship to the size of n.

> O(log(n)) | Logarithmic  
&emsp;e.g.&emsp;Binary Search  
&emsp;&emsp;&emsp;&ensp;~ a function that seems to 'halve' (base-2 log) input size as it iterates

> O(n) | Linear  
&emsp;e.g.&emsp;a function that checks if a value exists in an array  
&emsp;&emsp;&emsp;&ensp;~ a function where every element of the input is evaluated once

> O(n*log(n)) | Log-Linear  
&emsp;e.g.&emsp;'Efficient' sorting algorithms like Merge Sort, Quick Sort  
&emsp;&emsp;&emsp;&ensp;~ a function that combines both logarithmic and linear behavior

> O(n^2), O(n^3) .. | Polynomial (Quadratic, Cubic ..)  
&emsp;e.g.&emsp;'Naive' sorting algorithms like Bubble Sort    
&emsp;&emsp;&emsp;&ensp; ~ a function with nested loops

> O(2^n) | Exponential  
&emsp;e.g.&emsp;a function that generates all subsets or combinations of elements in an array

> O(n!) | Factorial  
&emsp;e.g.&emsp;a function that generates all permutations of elements in an array  


## Further Reading
- Here's a [Wikipedia article](https://en.wikipedia.org/wiki/Big_O_notation) for more in-depth information. The graph under "Infinite Asymptotics" is helpful to visualize the difference in performance.
