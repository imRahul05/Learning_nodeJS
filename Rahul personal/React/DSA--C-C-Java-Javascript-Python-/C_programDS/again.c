#include <stdio.h>
#include <ctype.h>

int main() {
    int num[], ch, choice;

    do {
        printf("Enter an integer: ");
        while(scanf("%d", &num) != 1) {
            printf("Invalid input! Please enter an integer: ");

            // clear input buffer
            while((ch = getchar()) != '\n' && ch != EOF);

            // check if input contains non-numeric characters
            for(int i = 0; i < sizeof(num)/sizeof(int); i++) {
                if(!isdigit((unsigned char)num[i])) {
                    printf("Invalid input! Please enter an integer: ");
                    break;
                }
            }
        }

        printf("You entered: %d\n", num);

        printf("Do you want to enter another integer? (1 for Yes, 0 for No): ");
        scanf("%d", &choice);

        // clear input buffer
        while((ch = getchar()) != '\n' && ch != EOF);

    } while(choice != 0);

    printf("Program exited. Thank you!\n");

    return 0;
}
