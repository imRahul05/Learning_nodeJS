#include <stdio.h>

int main()
{
    int days = 31, weekday = 0, date = 1;

    // Calculate the weekday of the 1st day of the month
    weekday = 2; // January 1, 2022 is a Saturday, so we start with weekday 2 (Monday)

    // Print the calendar header
    printf("%10s\n", "MONTH");
    printf("--------------------\n");
    printf(" SUN MON TUE WED THU FRI SAT\n");

    // Print the calendar body
    for (int i = 0; i < weekday; i++)
        printf("    ");

    while (date <= days)
    {
        printf("%4d", date);
       

        if (++weekday > 6)
        {
            weekday = 0;
            printf("\n");
        }

        date++;
    }

    if (weekday != 0)
        printf("\n");

    return 0;
}

