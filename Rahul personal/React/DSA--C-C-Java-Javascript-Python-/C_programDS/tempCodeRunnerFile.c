#include<stdio.h>
int encrtypt()
{
    char fname[20], ch;
    FILE *fps, *fpt;
    printf("\nEnter Filename: ");
    scanf("%s",fname);
    fps = fopen(fname, "r");
    if(fps == NULL)
        return 0;
    fpt = fopen("temp.txt", "w");
    if(fpt == NULL)
        return 0;
    ch = fgetc(fps);
    while(ch != EOF)
    {
        ch = ch+100;
        fputc(ch, fpt);
        ch = fgetc(fps);
    }
    fclose(fps);
    fclose(fpt);
    fps = fopen(fname, "w");
    if(fps == NULL)
        return 0;
    fpt = fopen("temp.txt", "r");
    if(fpt == NULL)
        return 0;
    ch = fgetc(fpt);
    while(ch != EOF)
    {
        ch = fputc(ch, fps);
        ch = fgetc(fpt);
    }
    fclose(fps);
    fclose(fpt);
    printf("\nFile %s Encrypted Successfully!", fname); 
return 0;   
}
int decrypt()
{
    char fname[20],ch;
    FILE *fps,*fpt;

    printf("\nEnter filename:");
    scanf("%s",fname);

    fps=fopen(fname,"r");
    if(fps==NULL)
     return 0;
    fpt=fopen("temp.txt","w");
    if(fpt==NULL)
     return 0;
    ch=fgetc(fps);
    while (ch!=EOF)
    {
        ch=ch-100;
        fputc(ch,fpt);
        ch=fgetc(fps);
    }
    fclose(fps);
    fclose(fpt);
    fps=fopen(fname,"w");
    if(fps==NULL)
     return 0;
    fpt=fopen("temp.txt","r");
    if(fpt==NULL)
     return 0;
     ch=fgetc(fpt);
    while(ch!=EOF)
    {
        fputc(ch,fps);
        ch=fgetc(fpt);
    }
    fclose(fps);
    fclose(fpt);

    printf("\n File %s Decrypted succesfully",fname);
return 0;

}

int main()
{
    int op;
    printf("\n1.For Encryption");
    printf("\n2.For Decryption");
    printf("\nEnter the option:");
    scanf("%d",&op);
    switch(op)
    {
        case 1:
          encrtypt();
          break;
        case 2:
          decrypt();
          break;
        
    }
    return 0;
}
