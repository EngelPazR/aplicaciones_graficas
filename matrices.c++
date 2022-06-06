//Suma de dos matrices, debe coincidir i=fila; j=columna
#include <stdio.h>
#include <iostream>
#include <ctime>

int main()
{int m,n,f,c,i,j,k;
float A[500][500],B[500][500],C[500][500];
int  t0, t1;



//ejecutar

printf("\n---------------------------------------------------\n");
printf("\nINGRESE LA FILA Y COLUMNA DE LA PRIMERA MATRIZ\n");
scanf("%d",&m);
scanf("%d",&n);
printf("\n---------------------------------------------------\n");
printf("\nINGRESE LA FILA Y COLUMNA DE LA SEGUNDA MATRIZ\n");
scanf("%d",&f);
scanf("%d",&c);
printf("\n");
if (n==f)
{printf("\n---------------------------------------------------\n");

t0=clock();

printf("INGRESE EL VALOR DE LA PRIMERA MATRIZ\n\n");
//INGRESE LAS MATRICES
for (i=1;i<=m;i++)
 for (j=1;j<=n;j++)
{ printf("A(%d,%d)= ",i,j);
   A[i][j]=i+j;
   
}
 
printf("\n");
printf("\n---------------------------------------------------\n");
printf("\nINGRESE EL VALOR DE LA SEGUNDA MATRIZ\n\n");
  for (i=1;i<=f;i++)
   for (j=1;j<=c;j++)
    { printf("B(%d,%d)= ",i,j);
     B[i][j]=i+j;
    
    }
//OPERACION DE MULTIPLICACION
 for (i=1;i<=m;i++)
    {for (j=1;j<=c;j++)
       { C[i][j]=0;
         for (k=1;k<=n;k++)
          {C[i][j]=C[i][j]+A[i][k]*B[k][j];
          }
       }
    }
 printf("\n---------------------------------------------------\n");
 printf("\nLA MULTIPLICACION DE LAS MATRICES ES:\n\n");
//IMPRESION
  for (i=1;i<=m;i++)
   for (j=1;j<=c;j++)
    { printf("C(%d,%d)=\t%4.2f\n",i,j,C[i][j]);
    }
    
t1 = clock();
 
double time = (double(t1-t0)/CLOCKS_PER_SEC);
printf("Tiempo de ejecucion es de %f segundos",time);
}
else
{printf("\n_________________________________________\n");
printf("Estas matrices no se pueden multiplicar \n");
printf("debido a que el numero de columnas de la\n");
printf("matriz A es diferente al numero de filas\n");
printf("de la matriz B, !Vuelva a intentarlo!   \n");
}

getchar(); getchar();
}