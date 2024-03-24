//@@@@@@@@@@@@@@@@@@@@@Traccia 1
let rubrica = {
    'contacts': [
      {'name': 'Matteo', 'number': 33333333},
      {'name': 'Nicola', 'number': 33344444},
      {'name': 'Marco', 'number': 33355555}
    ],
    'ShowContact':function ShowContacts() {
      wrapped.innerHTML='';
      rubrica.contacts.forEach((contact)=>{
       let contatto = document.createElement('tr');
       contatto.innerHTML=`<td><strong> Name: </strong></td> <td> ${contact.name} </td> <td><strong> number: </strong> </td> <td> ${contact.number} </td>`;
       wrapped.appendChild(contatto);
      }
      )
    },
    'AddContact': function (NewName, NewNumber) {
        this.contacts.push( {'name': NewName, 'number': NewNumber});
    },
    "DeleteContact" : function (nome) {
      let cancellato = this.contacts.filter(contact => contact.name.toUpperCase() != nome.toUpperCase());
      this.contacts = cancellato;
      return this.contacts;
  },
  "ChangeContact" : function (nome, nomeModificato, telefonoModificato){
    let cancellato = this.contacts.filter(contact => contact.name.toUpperCase() != nome.toUpperCase());
    let contatto = {'name': nomeModificato, 'number': telefonoModificato};
    cancellato.push(contatto);
   this.contacts = cancellato;
   console.log(this.contacts)
  }
};
let bottone1 = document.querySelector('.button1');
let wrapped = document.querySelector('.table')
  

  //Bottone 1
  let Click1 =0;
  bottone1.addEventListener('click', ()=>{
    if(Click1 ==0){
        rubrica.ShowContact();
        Click1++;
    }else if(Click1 == 1){
        wrapped.innerHTML='';
        Click1 =0;
    }
  });

  //Bottone2
  let bottone2= document.querySelector('.button2');
  let InputNome =document.querySelector('.InputNome');
  let InputNumero= document.querySelector('.InputNumero');

 
  bottone2.addEventListener('click',()=>{
    if(InputNome.value != '' && InputNumero.value != ''){
   rubrica.AddContact(InputNome.value, InputNumero.value);
    rubrica.ShowContact();
} else{
    alert('riempi gli spazi');
  };
  });

  //Bottone3
  let bottone3= document.querySelector('.button3');
  let InputNomeElimina = document.querySelector('.InputNomeElimina');

  bottone3.addEventListener('click', ()=>{
    if(InputNomeElimina.value != ''){
          rubrica.DeleteContact(InputNomeElimina.value);
          rubrica.ShowContact();
    } else { alert('Inesrisci il nome')};
  });


  //Bottone4
let bottone4 = document.querySelector('.button4');
let InputNomeModifica= document.querySelector('.InputNomeModifica');
let contenitoreModifica= document.querySelector('.contenitoreModifica');
let Modifica = 0;
 bottone4.addEventListener('click', ()=>{
  if(InputNomeModifica.value != ''){
    Modifica =0;
    Modifica++;
    contenitoreModifica.innerHTML='';
     let input = document.createElement('div');
     input.innerHTML=`<div class="input-group mb-3 w-75">
     <input type="text" class="form-control InputNomeModificaNome" placeholder="New Name" aria-label="Recipient's username" aria-describedby="button-addon2">
   </div> 
   <div class="input-group mb-3 w-75">
        <input type="text" class="form-control InputNomeModificaNumero" placeholder="NewNumber" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary prova" type="button" id="button-addon2">Modifica</button>
      </div> `;
   contenitoreModifica.appendChild(input);

  }else {
    alert('inserisci il nome');
  }
});


  console.log('ciao');
let bottone5= document.querySelector('.prova');
let InputNomeModificaNome = document.querySelector('.InputNomeModificaNome');
let InputNomeModificaNumero= document.querySelector('.InputNomeModificaNumero');

bottone5.addEventListener('click',()=>{
  ChangeContact(InputNomeModifica.value, InputNomeModificaNome.value, InputNomeModificaNumero.value);
  ShowContact();
});

  /* ChangeContact(InputNomeModifica.value, InputNomeModificaNome.value, InputNomeModificaNumero.value);
  ShowContact(); */

