# Teoria de Reactividad

#### Manipulacion Manual del DOM

- No hay mucho que agregar. Esta se hace con la misma tecnica que hemos venido empleando a lo largo del curso (usando el inserciones al DOM)

---

#### UI basada en el estado

- Para manipular la UI con el estado necesitamos 3 cosas, las cuales son:

  ```js
  // Estado UI
  const state = {};
  // Template UI
  const template = () => {};
  // Render UI
  const render = () => {};
  ```

  - El **state** es donde estaran todos los datos de la aplicacion y no es mas que un objeto de **javascript**
  - el **template** es donde tendremos el **html** dinamico que obtendremos del **state** y cual lo ejecutamos en el **render**
  - el **render** es el metodo que nos sirve para renderizar la aplicacion y esta atendo cuando el **state** cambie (se ejecuta cada ves que hay un cambio de estado)

  **Nota mental jjj:** Esto es como un **vuex** casero :) increible

---

#### Estado Reactivo

- Una mala practica en el manejo de la reactividad es manipular el **estado** directamente
- La razon es porque el **estado** es simplemente un objeto **JS** lo cual significa que podemos agregar muchas propiedades sin ningun control y proteguemos la intergridad de la aplicacion
- Para manipular el estado de manera reactiva usamos lo que se conoce en **react** como **setState** o en **vuex** como las **mutations** en las que que podemos validar que si una **key** no existe en el **state** declarado entonces no hacemos nada y si existe modificamos el **state**

- **NOTA:** algo que tenemos que tener en cuenta con el estado es que necesitamos que este sea inmutable (a que se refiere?)
  - Lo anterior nos permite que no caigamos en un **estado mutable**. Si bien con lo anterior de tener un estado reactivo nos permite no hacer injeccion directa al **state** esto no nos salva de un **estado mutable** es cual es el mismo problema de que podemos modificar los datos sin control alguno.

---

#### estado inmutable

- para manejar un estado de esta manera debemos crear una copia del estado original (como si fuera una fotografia instantanea) esta copia nos permitira que el estado sea inmutable, ya que si queremos agregar datos necesitaremos del metodo **setState** para modificar los datos

---

#### estado local

- En la teria de la reactividad se nos mencionaba que los componentes son independientes, tanto de su logica como de estilos
- Ahi tambien dentran los **estados** de estos componentes, podemos tener **estados globales** como **locales**
- los estados globales afectan el comportamiento de toda la aplicacion, mientras que el local solo afecta a ese componente particular
