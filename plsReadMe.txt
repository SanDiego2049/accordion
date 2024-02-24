Changes made to your code.

In the Html, I removed the figure element and replaced them with button as that is the correct semantic element to use.
I removed the svgs and replaced them with imgs because they are easier to work with in my opinion.

css: I added styles to the button and set the img pointer-events to none.
The importance of setting img pointer to none is that,
it prevents the img from being clicked instead of the button.

Javascript: I had to re-write it, sorry. The selections were mostly not well done. Yes, they worked,
but you don't have to selected the parentElement of a childElement to select a sibling.
Every element that has an id or a class can be selected with querySelector,getElementById orgetElementByClassName.
In all, I change only things that I felt would hinder the aim of making the accordion work properly. You should 
still edit your code to be better.
If you have any questions, feel free to reach out.

If you think my solution is helpful, pls mark my comment as helpful on frontend mentors. Cheers! Happy coding!
