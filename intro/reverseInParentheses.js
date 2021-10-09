function reverseInParentheses(inputString) {
    var stack = [];
    for (let i = 0; i < inputString.length; i++) {
        char = inputString.charAt(i);
        if (char ===')') {
            var reverse = '';
            while (stack.length > 0 && stack[stack.length - 1] != '(') {
                reverse += stack.pop();
            }
            stack.pop();
            for (let i = 0; i < reverse.length; i++) {
                stack.push(reverse.charAt(i));
            }
        } else {
            stack.push(char)
        }
    }
    return stack.join('');
};
