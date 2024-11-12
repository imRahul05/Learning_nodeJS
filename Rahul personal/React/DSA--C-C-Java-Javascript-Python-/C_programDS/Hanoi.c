#include <stdio.h>
void toh(int n, char s, char d, char au)
{
    if (n == 1)
    {
        printf("\nMove disk 1 from %c to %c\n", s, d);
        return;
    }
    
        toh(n - 1, s,au,d);
        printf("\nMove disk %d from %c to %c\n", n,s,d);
        toh(n - 1, au, d, s);
}
int main()
{
    char s = 'A', d = 'C', au = 'B';
    int n = 3;
    printf("Tower of Hanoi with %d disk\n", n);
    toh(n, s, d, au);
    printf("\nmoving of all 3 disk completed");
    return 0;
}