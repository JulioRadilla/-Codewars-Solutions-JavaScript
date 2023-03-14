/*Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
Good luck :D*/
//Solution:
//Method 1
//We can use the replace method to search the string given to us for a regular expression
//this method doesnt change the actual string it just returns a new string with the values replaced 
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
}
//Method 2 
//Split the string given and then map it and check if the value matches what we are trying to replace if it does then the new value would be given 
//return the array by using the join method to get it back together 
function htmlspecialchars(formData) {
    let s =  formData.split('');
    let letters =  s.map(item => item == '<' ? item ='&lt;' : item == '>' ? item = '&gt;' : item == '"' ? item = '&quot;' : item == '&' ? item = '&amp;' : item)
    return letters.join('')
}