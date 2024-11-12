#include <stdio.h>

int main()
{
    int month = 0, year = 0, days = 31, weekday = 0, date = 1;
    // weekday: 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Input month and year from user
    printf("Enter month (1-12): ");
    scanf("%d", &month);
    printf("Enter year: ");
    scanf("%d", &year);

    // Calculate the weekday of the 1st day of the month
    weekday = ((year - 1) * 365 + (year - 1) / 4 - (year - 1) / 100 + (year - 1) / 400 + 1);
    for (int i = 1; i < month; i++)
    {
        if (i == 2)
        {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
                days = 29;
            else
                days = 28;
        }
        else if (i == 4 || i == 6 || i == 9 || i == 11)
            days = 30;
        else
            days = 31;

        weekday = (weekday + days) % 7;
    }

    // Print the calendar header
    printf("\n%10s %d\n", "MONTH", month);
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



