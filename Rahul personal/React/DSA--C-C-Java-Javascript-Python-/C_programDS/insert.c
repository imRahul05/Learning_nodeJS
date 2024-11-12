#include<stdio.h>
#include<stdlib.h>
#define MAX 20
int que_arr[MAX];
int rear=-1,front=-1;

void insert()
{
   int item;
      if (rear == MAX - 1)
            printf("Queue Overflow \n");
      else
      {
            if(front == - 1)
              front = 0;
            printf("\nEnter element : ");
            scanf("%d", &item);
            printf("\n%d is inserted in queue\n",item);
            rear = rear + 1;
            que_arr[rear] = item;
      }
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
    if((front==-1)&&(rear==-1))
     printf("\nqueue is empty");
    else{
        for(i=front;i<=rear;i++)
        printf("\n%d",que_arr[i]);
    }
    

}
int main()
{
    int op;
   
    while(1)
    {
    printf("1.insertion\n2.Deletion\n3.display\n4.Exit\nEnter the opton:");
    scanf("%d",&op);
        switch(op)
        {
        case 1:insert();
               break;
        case 2:delete();
               break;
        case 3:dis();
               break;
        case 4: exit(1);
        }

    }

}