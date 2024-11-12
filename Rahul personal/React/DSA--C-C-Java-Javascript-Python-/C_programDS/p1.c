#include<stdio.h>
#include<ctype.h>
int stack[20];
int top=-1;
void push(char x)
{
    stack[++top]=x;
}
char pop()
{
    if(top==-1)
    return 0;
    else
    return stack[top--];
}
int pri(char x)
{
    if(x=='(')
     return 0;
    if(x=='+'||x=='-')
     return 1;
    if(x=='*'||x=='/')
     return 2;
}
int main()
{
 char *e,exp[20],x;
 if(sialnum(*e))
   printf("%c",*e);
 else if(*e=='(')
  push(*e);
 else if(*e==')')
   while((x=pop()!='('))
    printf("%c",x);
else
{
    

}
    
}