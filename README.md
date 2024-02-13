# ProyctoFinalExtra
Aquí encontraremos el proyecto de puntos Extras
El programa es un simulador de cotización de seguros que solicita información relevante al usuario, como su nombre, edad, estado civil, edad del cónyuge (en caso de estar casado), si tienen hijos y la cantidad de estos. Luego, basándose en esta información, calcula un recargo total en función de diferentes factores como la edad del asegurado y del cónyuge, la cantidad de hijos, entre otros. Finalmente, presenta al usuario el recargo total y el precio final de la cotización.

Partes del problema a considerar:

Solicitud de datos: El programa solicita información al usuario mediante el uso de la función prompt(). Es importante asegurarse de validar esta entrada para evitar errores o datos incorrectos.

Cálculo de recargos: El programa calcula el recargo total basado en diferentes factores, como la edad del asegurado y del cónyuge, así como la cantidad de hijos. Estos cálculos se realizan utilizando estructuras condicionales (if...else if...else) y fórmulas matemáticas simples.

Presentación de resultados: Una vez que se han recopilado y procesado todos los datos, el programa presenta al usuario el recargo total y el precio final de la cotización mediante el uso de la función alert().

Ciclo de cotización: Se implementa un ciclo while que permite al usuario realizar múltiples cotizaciones hasta que decide salir del programa. Esto proporciona una experiencia interactiva al usuario.

Cosas que podrían mejorarse:

Validación de entrada: Actualmente, el programa asume que el usuario ingresará datos válidos en todas las solicitudes. Sería beneficioso agregar validación de entrada para garantizar que los datos proporcionados sean del tipo esperado y estén dentro de rangos aceptables.

Manejo de errores: El programa no maneja explícitamente posibles errores que podrían surgir durante la ejecución, como la cancelación de una solicitud de entrada por parte del usuario. Sería útil agregar manejo de errores para brindar una experiencia más robusta al usuario.

Modularización del código: El código actualmente está escrito en un solo bloque, lo que puede dificultar su mantenimiento y escalabilidad a medida que crece en complejidad. Sería beneficioso modularizar el código dividiéndolo en funciones más pequeñas y específicas, lo que facilitaría su comprensión y mantenimiento.

Agregar más funcionalidades: El programa actualmente calcula el recargo basado en la edad, el estado civil y la cantidad de hijos. Se podrían agregar más funcionalidades, como el cálculo de recargos basados en propiedades e ingresos, como se menciona en el problema original.

Interfaz de usuario mejorada: El uso de prompt() y alert() proporciona una interfaz básica para interactuar con el usuario. Se podría considerar mejorar la experiencia del usuario utilizando una interfaz más amigable y dinámica, posiblemente utilizando HTML, CSS y JavaScript para crear una interfaz web más intuitiva.
