#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
int main()
{
    int ch;
    void linearsearch();
    void binarysearch();
    printf("\n1.Linear search\n2.Binary search\nEnter your choice");
    scanf("%d", &ch);
    switch (ch)
    {
    case 1:
        linearsearch();
        break;
    case 2:
        binarysearch();
        break;
    default:
        exit(0);
    }
    getch();
    return 0;
}
void linearsearch()
{
    int i, n, loc, a[100], ele;
    printf("\n Enter the size of array");
    scanf("%d", &n);
    printf("Enter the elements of the array");
    for (i = 1; i <= n; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("Enter the search key");
    scanf("%d", &ele);
    for (i = 1; i <= n; i++)
    {
        if (ele == a[i])
        {
            loc = i;
            printf("\nThe location of %d is%d", ele, loc);
        }
    }
}
    void binarysearch()
    {
        int mid, i, low, high, n, a[100], ele;
        printf("\n Enter the size of array");
        scanf("%d", &n);
        printf("Enter the first element");
        scanf("%d", &a[1]);
        printf("enter the rest of the elements");
        for (i = 1; i < n; i++)
        {
            scanf("%d", &a[i + 1]);
            if (a[i + 1] < a[i])
            {
                printf("Wrong element");
                exit(0);
            }
        }
        printf("Enter the search key");
        scanf("%d", &ele);
        low = 1;
        high = n;
        mid = (low + high) / 2;
        i = 1;
        while (ele != a[mid])
        {
            if (ele <= a[mid])
            {
                low = 1;
                high = mid + 1;
                mid = (low + high) / 2;
            }
            else
            {
                low = mid + 1;
                high = n;
                mid = (low + high) / 2;
            }
        }
        printf("search key found at location %d", mid);
    }