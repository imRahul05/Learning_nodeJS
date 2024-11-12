#include <stdio.h>

struct address {
    char city[30];
    char state[30];
};

struct person {
    char name[30];
    int age;
    struct address addr;
};

int main()
{
    struct person b1;
    //input by user
    printf("Enter name=");
    scanf("%s",b1.name);
    printf("Enter age=");
    scanf("%d",&b1.age);
    printf("Enter city=");
    scanf("%s",b1.addr.city);
    printf("Enter state=");
    scanf("%s",b1.addr.state);
    
    //OUTPUT
    printf("\nName: %s\n", b1.name);
    printf("Age: %d\n", b1.age);
    printf("Address: %s, %s\n", b1.addr.city, b1.addr.state);
    
    return 0;
}
