import styles from "../../../styles/AddPizza.module.css";
import {useRef} from 'react';


export default function Menu() {

 const PizzaAdd = useRef();

 function handleSubmit(e){
     e.preventDefault();
     const form = new FormData(PizzaAdd.current);
     
      const payload = {
          name: form.get("name"),
          description: form.get("description"),
          category: form.get("category"),
      }
      console.log(payload);
 }

    return ( 
    
    <section className={styles.formContainer}>
        <h3 className={styles.formContainer__formName}>Add thing to menu!</h3>

    <form ref={PizzaAdd} onSubmit={handleSubmit}>
     <div className={styles.formContainer_image}>
         <img src="" alt="" />
     </div>
     <div className={styles.formContainer_imageInput}>
         <label htmlFor="image">Image</label>
         <input  type='file' name='image' id='image' />
     </div>
     <div className={styles.formContainer_nameInput}>
         <label htmlFor="name">name</label>
         <input  type='text' name='name' id='name' placeholder="Pizza" />
     </div>
     <div className={styles.formContainer_descriptionInput}>
         <label htmlFor="descripion">Descripion</label>
         <input  type='text' name='descripion' id='descripion' placeholder="This pizza is awesome!" />
     </div>
     <div className={styles.formContainer_categoryInput}>
         <label htmlFor="category">Category</label>
         <select name="category" id="category">
            <option value="Pizza">Pizza</option>
            <option value="Pasta">Pasta</option>


         </select>
     </div>
     <button type="submit">
 Add
     </button>

    </form>
  </section>
    )
}




