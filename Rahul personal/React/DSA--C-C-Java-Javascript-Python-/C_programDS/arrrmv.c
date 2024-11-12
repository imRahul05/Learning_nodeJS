#include <stdio.h>

int main() {
    int arr[100], size, pos, i;

    printf("Enter size of the array: ");
    scanf("%d", &size);

    printf("Enter elements in the array:\n");
    for(i=0; i<size; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the position of the element to be deleted: ");
    scanf("%d", &pos);

    if(pos<1 || pos>size) {
        printf("Invalid position!\n");
    } else {
        // shift all elements from right to left
        for(i=pos-1; i<size-1; i++) {
            arr[i] = arr[i+1];
        }

        // decrease size of array by 1
        size--;

        printf("Array after deletion of element:\n");
        for(i=0; i<size; i++) {
            printf("%d ", arr[i]);
        }
    }

    return 0;
}
