#include<stdio.h>
int main()
{
    int a,b,c,n,m,x;
    printf("enter a number:->");
    scanf("%d",&n);
    printf("ENter the divisor:->");
    scanf("%d",&m);
    a=n/m;
    x=m%n;
    if(x==0){
    printf("%d is the nearest value",n);
    }
    else{
    b=m*(a+1);
    c=m*(a-1);
    if((b-n)>(n-c))
    printf("%d is Nearest",c);
    else if((b-n)<(n-c))
    printf("%d is Nearest",b);
    else
    printf("Both %d and %d are at the same distance",b,c);
    }
}