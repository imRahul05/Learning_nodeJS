#include <stdio.h>
#include <conio.h>
int fact(int);
int main()
{
    int NPR,N,R,M,i;
    NPR=0;
    M=0;
    M= N-R;
    printf("Enter value for N and R:");
    scanf("%d %d",&N,&R);
    NPR = fact(N)/fact(M);
    for(i=0;i<45;i++)
    printf("_");printf("\n\n");
    printf("Number of %d-permutation of %d object 
    = %dn",R,N,NPR);
    for(i=0;i<45;i++)
    printf("_");printf("\n\n");
    system("PAUSE");
    return 0;
}

int fact(m)
{
    int i,fact=1;
    for(i=1;i<=m;i++)
    {
        fact=fact*i;
    }
    return(fact);
}