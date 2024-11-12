#include<stdio.h>
int add(nums,target)
{
    
    int i,b;
    for(i=0;i<strlen(nums);i++)
    {
        for(b=i+1;b<strlen(nums);b++)
        {
         if(nums[i]+nums[b]==target)
          {
          return(i,b);
          }
        }
          
    }
}
int main()
{
    int a[10],i,t;
    printf("Enter numbers");
    for(i=0;i<10;i++)
    scanf("%d",a[i]);
    printf("ENter target num=");
    scanf("%d",&t);
    add(a,t);
    return 0;

}
