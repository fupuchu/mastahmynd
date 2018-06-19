# mastahmynd
Mastah Mynd: A Mastermind game but with numbers

This is for my WDI Project 1. Instead of using colors, I used numbers 0-5.

I ran into interesting bugs and had a ton of fun locating and fixing them.

One notable bug was where by the player can cheese the invalid inputs to keep guessing till they get the right combination. (Thanks Harry!)


## Project Post Mortem
---
#### Approach and Process
---

1. What in my process and approach to this project would I do differently next time?
**I used a more direct approach when tackling functions for checking if the combination was correct. I tried to apply some functional programming practices to it but I had to revert to the "old" style for some parts of the code.**

1. What in my process and approach to this project went well that I would repeat next time?
**Planning of functions and debugging the code. I ran through simulations in my head, wrote down the flow and code each function first before combining them together. It helps a lot to break down the steps to even smaller steps.**

---

#### Code and Code Design

---

1. What in my code and program design in the project would I do differently next time?
**Changing the whole code structure to functional programming with higher-order functions. When coding the game I was listening to a guy called mpj who runs a YouTube channel about Functiona Javascript.**

```
for (var i = 0; i < arr2.length; i++) {
        if (arr1[i] == arr2[i]) {
          $('#num' + i).addClass('correct').removeClass('wrong');
          $('#num' + i).attr("readonly", true);
          $('#num' + i).removeClass('default');
        } else {
          $('#num' + i).removeClass('default');
          $('#num' + i).addClass('wrong');
          $('#num' + i).val(null);
        }
      }
```
An example of a for loop with conditionals, I want to reduce the amount of code written here and group up more similar functions in the future.

1. What in my code and program design in the project went well? Is there anything I would do the same next time?
**Conditionals and spreading out individual tasks into functions helped me identify the bugs in a faster way. Console logging the results of each functions also helped me in identifying what and where went wrong.**

```
Object.keys(ansObj).forEach(function(num){
    ansObj[num] = Math.floor(Math.random() * 6).toString()
  });
```
An example of what I think was the correct method of doing functional programming. This is in the reset function where it changes each of the number for the combination.

```
if (arr2.includes("X")) {
      attempts -= 1;
      var inputClass = document.querySelectorAll('.numGuess');
      inputClass.forEach(function(x){
        x.classList.remove('correct');
        x.classList.remove('wrong');
        x.classList.add('default');
      })
    }
```
Another example of using a function called includes(); Instead of iterating the whole array to check for the string "X" I just run this once and put it as a conditional.

---
#### WDI Unit 1 Post Mortem
1. What habits did I use during this unit that helped me?
**Constant testing and user testing helped a lot. Reading up on some functions also helped. Having a test enviroment to simulate what you want to do with the function you wrote also provided a lot of insight.**
2. What habits did I have during this unit that I can improve on?
**Asking more questions generally. There is also a point where you need to stop reading and start doing to see it for yourself**
3. How is the overall level of the course during this unit? (instruction, course materials, etc.)
**It's at a good pace, 3 weeks ago I didn't know about functions, recursive looping and functional programming. Last week I made a game with those practices in mind**
