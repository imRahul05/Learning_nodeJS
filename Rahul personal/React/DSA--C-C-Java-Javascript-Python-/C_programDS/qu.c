#include<stdio.h>
#include<stdlib.h>
#define MAX 20
int que_array[MAX];
int rear =-1,front = -1;
void insert()
{
    int item;
    if(rear==MAX-1)
     printf("\nQueue Overflow");
    else
    {
        if(front==-1)
        front=0;
        printf("Enter element:");
        scanf("%d",&item);
        printf("\nElement:%d successfully inserted",item);
        rear=rear+1;
        que_array[rear]=item;
    }
}    
void delete()
{
    if(front==-1){
      printf("queue Empty");
      return;
    }
    else{
    front=front+1;
    printf("\nelement deleted succssfully\n");
    }

}
void display()
{
    int i;
    if(front==-1)
    printf("Queue Underflow");
    else
    {
        for(i=front;i<=rear;i++)
        printf("%d",que_array[i]);

    }
}
int main()
{
    int ch;
    printf("MENU\n");
    printf("-------------------------------------\n");
    printf("1.Insert a element\n");
    printf("2.Display element\n");
    printf("3.Dlelte element\n");
     printf("4.EXIT\n");
    while(1)
    {
        printf("choose one Operation:\n");
        scanf("%d",&ch);
        switch(ch)
        {
            case 1:
                insert();
                break;
            case 2:
                display();
                break;
            case 3:
                  delete();
                  break;
            case 4:
                exit(1);
                

        }
    }
return 0;
}