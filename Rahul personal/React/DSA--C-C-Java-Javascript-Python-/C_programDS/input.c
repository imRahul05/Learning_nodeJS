#include <stdio.h>

int main() {
    int num;

    printf("Enter an integer: ");
    while(scanf("%d", &num) != 1) {
        printf("Invalid input! Please enter an integer: ");
        while(getchar() != '\n'); // clear input buffer
    }

    printf("You entered: %d\n", num);

    return 0;
}
