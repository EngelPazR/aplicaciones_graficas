#include <stdio.h>
#include <time.h>       // for time()
#include <unistd.h>     // for sleep()
 
// función principal para encontrar el tiempo de ejecución de un programa en C
int main()
{
    time_t begin = time(NULL);
 
    // hacer algunas cosas aquí
   int primos_por_mostrar, n, d;
    int es_primo;

    printf("Mostrando 1000 numeros primos\n");
    primos_por_mostrar=6000;

    n = 2;
    while (primos_por_mostrar > 0) {

        /* determinar si n es primo */
        es_primo = 1;
        for (d = 2; d < n; ++d) {
            if (n % d == 0) {
                es_primo = 0;
                break;
            }
        }

        /* mostrar el numero
         * y actualizar el contador */
        if (es_primo) {
            printf("%d ", n);
            primos_por_mostrar--;
        }
        n++;
    }

    printf("\n");
 
    time_t end = time(NULL);
 
    // calcular el tiempo transcurrido encontrando la diferencia (fin - comienzo)
    printf("Tiempo transcurrido es de %d segundos", (end - begin));
 
    return 0;
}