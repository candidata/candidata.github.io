// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzp5LM-_hOtjUCCaMPPz2J8A8Mt0aSlo8",
  authDomain: "testecandidata.firebaseapp.com",
  databaseURL: "https://testecandidata-default-rtdb.firebaseio.com",
  projectId: "testecandidata",
  storageBucket: "testecandidata.appspot.com",
  messagingSenderId: "1002876958696",
  appId: "1:1002876958696:web:908ef4631cbcd2721ad65d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service

var database = firebase.database();
var ref = firebase.database().ref()

const dbRef = firebase.database().ref();

var nome;
var votos;
// 1945 - ('AL',0)

function teste(campo,ano,estado){
    var data = [];
    // for (var i=0;i<6;i++){
        

    //     firebase.database().ref(ano).child(estado).child(i).child(campo).once('value',(snap)=>{
    //         nome = snap.val();
    //         data.push(nome)
    //         console.log(nome);
    //         });
    var nomeCampo = "('"+estado+"', 0)";
    var camposQuero = ['NM_CANDIDATO','QT_VOTOS_NOMINAIS','SQ_CANDIDATO'];
    for (var x=0;x<(camposQuero.length+1);x++){
        firebase.database().ref(1945).child(nomeCampo).child(camposQuero[x]).once('value',(snap)=>{
                    nome = snap.val();
                    data.push(nome);
                    console.log(nome);
                    });;
      

    };

    return data;

};



function validateForm() {
    let ano = document.forms["myForm"]["ano"].value;
    let estado = document.forms["myForm"]["estado"].value;
    var dados = teste('NM_CANDIDATO',ano,estado);
    console.log(dados);
    var divElement = document.createElement("Div");
    divElement.id = "divID";
    var paragraph = document.createElement("P");
    var text = document.createTextNode(nome);
    var paragraph2 = document.createElement("P");
    var text2 = document.createTextNode(nome);
    paragraph.appendChild(text);
    divElement.appendChild(paragraph);
    paragraph2.appendChild(text2);
    divElement.appendChild(paragraph2);

    document.getElementsByTagName("body")[0].appendChild(divElement);
    console.log('ok');
}

