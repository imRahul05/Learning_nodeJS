#include<stdio.h>
int main()
{
    int i,b,a[100];
    printf("Enter the no of elements=");
    scanf("%d",&b);
    printf("ENter the elements=");
    for(i=0;i<b;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<b;i++)
    {
        printf("%d\n",a[i]);
    }
return 0;
}