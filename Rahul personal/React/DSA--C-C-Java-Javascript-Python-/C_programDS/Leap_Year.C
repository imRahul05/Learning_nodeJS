#include<stdio.h>
int main()
{
    int year;
    printf("Enter a year=");
    scanf("%d",&year);
    if((year%4==0 && year!=0)||(year%400==0))//(year%4==0 && (year!=0||year%400==0))?printf("%d is a Leap Year\n",year):printf("%d is not a leap year",year);
    printf("%d is a Leap Year",year);
    else
    printf("%d is not a leap year",year);
return 0;
}       