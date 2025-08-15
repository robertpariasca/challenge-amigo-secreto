Challenge 1

Proyecto de Amigo Secreto

Se pidió crear una interfaz que permita ingresar varios nombres, mostrarlos, y al presionar un boton, elegír uno de todos los ingresados y mostrarlo en la pantalla.

Para este proyecto se tienen 3 funciones principales:

agregarAmigo: Valida que se haya ingresado un dato en el campo respectivo, y que este no se repita. En caso cumpla las condiciones, agrega el nombre a la lista y llama a la siguiente funcion

    En caso el campo este vacío mostrará el error "Debe ingresar un nombre".

    En caso el nombre esté repetido mostrará el error "Ya ingresó este nombre previamente".

    En caso tenga exito, ingresará el valor a la lista y llamará a la funcion "mostrarAmigo".

mostrarAmigo: Inserta la lista de amigos en un item HTML para mostrarlo en la pantalla.

sortearAmigo: En caso haya al menos 2 personas en la lista, elegirá al azar uno de los nombres en la lista, y lo mostrará en color verde.

    En caso haya 1 o ninguna persona, mostrará el error "Debe ingresar al menos 2 personas para sortear"

    En caso haya 2 o mas personas, elegirá una.