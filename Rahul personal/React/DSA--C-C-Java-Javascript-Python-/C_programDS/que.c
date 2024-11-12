#include<stdio.h>
#define MAX 20
int que_arr[MAX];
int rear=-1,front=-1;

void insert()
{
    int item;
    if(rear==MAX-1)
    printf("Queue Overflow");
    else
    {
        if(rear==-1)
         front=0;
        else
        {
            printf("Enter elemnt");
            scanf("%s",&item);
            que_arr[rear]=item;
            rear++;


        }
    }
    printf("\nElemet inserted succesfully");
}
void delete()
{
    if(front==-1)
     printf("queue is empty");
    else
    {
        printf("elemet dleted successfully");
        front=front+1;

    }
}
void dis()
{
    int i;
    if(front==-1&&rear==-1)
     printf("\nqueue is empty");
    else{
        for(i=MAX-1;i<=1;i++)
        printf("\n%d",que_arr[i]);
    }
    

}
int main()
{
    int op;
    printf("Enter the opton\n1.insertion\n2.Deletion\n3.display\n4.Exit");
    scanf("%d",&op);
    while(1)
    {
        switch(op)
        {
        case 1:insert();
               break;
        case 2:delete();
               break;
        case 3:dis();
               break;
        case 4:Exit(1);
        }

    }

}