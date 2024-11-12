#include<stdio.h>
#include<ctype.h>
 int main(){
     char ch;
     printf("Enter a character=");
     scanf("%c",&ch);
     if(isalpha(ch))
        if(isupper(ch))
          printf("%c is Uppercase",ch);
          else
          printf("%c is Lowercase",ch);
     else if(isdigit(ch))
        printf("%d is a Digit",ch);
        else
        printf("%c is special character",ch);
   return 0;
 }