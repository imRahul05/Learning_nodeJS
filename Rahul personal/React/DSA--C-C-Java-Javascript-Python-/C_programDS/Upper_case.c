#include<stdio.h>
int main()
{
    char ch;
    printf("Enter a character=");
    scanf("%c",&ch);
    if(ch>='A'&&ch<='Z') // (ch >= 65 && ch <= 90)     
    printf("%c is Uppercase",ch);
    else if(ch>='a'&&ch<='z') // (ch >= 97 && ch <= 122) 
    printf("%c is Lowercase",ch);
    else if(ch>='0'&&ch<='9') //(ch >= 48 && ch <= 57)
    printf("%c is digit",ch);
    else
    printf("%c is a special character",ch);
    return 0;`
}
//    (ch >= 'A' && ch <= 'Z') ? printf("%c is an uppercase letter.", ch) :
//     (ch >= 'a' && ch <= 'z') ? printf("%c is a lowercase letter.", ch) :
//   (ch >= '0' && ch <= '9') ? printf("%c is a digit.", ch) :
//      printf("%c is a special character.", ch);
// #include<stdio.h>
// #include<ctype.h>
// int main(){
//     char ch;
//     printf("Enter a character=");
//     scanf("%c",&ch);
//     if(isalpha(ch))
//        if(isupper(ch))
//          printf("%c is Uppercase",ch);
//          else
//          printf("%c is Lowercase",ch);
//     else if(isdigit(ch))
//        printf("%c is a Digit");
//        else
//        printf("%c is special character",ch);
//   return 0;
// }

