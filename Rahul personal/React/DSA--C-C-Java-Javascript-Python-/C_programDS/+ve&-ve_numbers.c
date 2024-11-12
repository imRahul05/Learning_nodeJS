#include<stdio.h>
int main()
{
    int a;
    //input from user
    printf("Enter a number=");
    scanf("%d",&a);
    (a>=0)?printf("%d is positive number",a):printf("%d is negative number",a);
    return 0;
}