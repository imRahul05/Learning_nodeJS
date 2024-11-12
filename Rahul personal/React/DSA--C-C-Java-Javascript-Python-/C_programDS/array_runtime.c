#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    int* arr;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    arr = (int*) malloc(n * sizeof(int));

    if(arr == NULL) {
        printf("Memory allocation failed. Exiting program...\n");
        exit(1);
    }

    printf("Enter %d elements in the array:\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("The elements in the array are:\n");
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    free(arr);

    return 0;
}
