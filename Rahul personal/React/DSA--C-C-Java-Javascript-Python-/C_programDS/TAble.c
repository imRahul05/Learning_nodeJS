#include<stdio.h>
int main()
{
    int n,a;
    printf("Enter a number=");
    scanf("%d",&n);
    printf("Table of %d\n",n);
    for(a=1;a<=10;a++)
    {
        printf("%dx%d=%d\n",n,a,a*n);
    }
return 0;
}