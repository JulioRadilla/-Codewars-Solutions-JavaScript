/*Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects! */
//Solution:
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}
//Use a template string to type I like and use a  tag template to join the words with a comma and space 