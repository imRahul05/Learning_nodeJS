#include<stdio.h>
int main()
{
   int target=18; 
   int candy;

   printf("Enter how many candy emplyee sold:");
   scanf("%d",&candy);

   if(candy<=target)
   {
    printf("Employee amount= %d",(candy*10));
   }
   else{
    printf("Employee amount= %d",(candy*10+candy*20));
   }
   return 0;
}