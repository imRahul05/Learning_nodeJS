#include<stdio.h>
struct bio{
    char name[30];
    int age,wg;
    float per;

};
int main()
{
    // input by user
    struct bio b1;
    printf("Please enter yr name=");
    scanf("%s",b1.name);
    printf("Please enter yr age=");
    scanf("%d",&b1.age);
    printf("Please enter yr weight=");
    scanf("%d",&b1.wg);
    printf("Please enter yr BCA percentage=");
    scanf("%f",&b1.per);
    
    // output 
    printf("\nYour BioData:\n");
    printf("Your name=%s\n",b1.name);
    printf("Your AGE=%d\n",b1.age);
    printf("Your Weight=%d\n",b1.wg);
    printf("Your BCA percentage=%f",b1.per);

return 0;

}