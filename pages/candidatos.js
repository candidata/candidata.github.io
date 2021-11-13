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

var estado;
var ano;



var camposQuero = ['NM_CANDIDATO','QT_VOTOS_NOMINAIS','SQ_CANDIDATO'];


function gerarListaCandidatos(listaGeral){
    
    
    for (var i=0;i<100;i++){
        var tdBodyCand = document.getElementById('bodycandidato');
        var tdCand = document.getElementById('candidato'); // pega o td do candidato
        
        var novocand = tdCand.cloneNode(true);
        novocand.id = 'candidato'+i.toString();
        
        tdBodyCand.appendChild(novocand);
        var res = document.querySelectorAll('tr')[2+i];
        
        var nomeCandidato = listaGeral[0][i];
        var nmUrnaCandidato = listaGeral[1][i];
        var cargoCandidato = listaGeral[2][i];
        var sgUFcandidato = listaGeral[3][i];
        var sitCandidato = listaGeral[4][i];
        var votosCandidato = listaGeral[5][i];
        var genCandidato = listaGeral[6][i];
        var sgUeCandidato = listaGeral[7][i];
        
        res.querySelectorAll('#modal-candidato')[0].id = "modal-candidato"+i.toString();
        res.querySelectorAll('button')[0].setAttribute("href", "#modal-candidato"+i.toString());
        // document.querySelectorAll('#botaoModal')[1].dataset['bsTarget'] = "#perfil"+i.toString();
        res.querySelectorAll('h6')[0].innerHTML = nomeCandidato;
        res.querySelectorAll('h6')[1].innerHTML = nomeCandidato;
        // nmCandidato
        res.querySelectorAll('p')[0].innerHTML = nmUrnaCandidato;
        res.querySelectorAll('p')[3].innerHTML = nmUrnaCandidato;
        // cargo
        res.querySelectorAll('p')[1].innerHTML = cargoCandidato;
        res.querySelectorAll('p')[5].innerHTML = cargoCandidato;
        // local
        res.querySelectorAll('p')[2].innerHTML = sgUFcandidato;
        res.querySelectorAll('p')[6].innerHTML = sgUFcandidato;
        // sit
        res.querySelectorAll('span')[0].innerHTML = sitCandidato;
        if(sitCandidato!='ELEITO' && sitCandidato!='ELEITO POR QP'){
            res.querySelectorAll('span')[0].classList.replace('bg-gradient-success','bg-gradient-secondary');
        }
        // votos
        
        res.querySelectorAll('span')[1].innerHTML = votosCandidato;
        res.querySelectorAll('p')[8].innerHTML = votosCandidato;
        
        res.querySelectorAll('p')[4].innerHTML = genCandidato;
        
        // sgue
        res.querySelectorAll('p')[7].innerHTML = sgUeCandidato;
    

            
    };
};


var listaGeral = [];
var dadosLista = [];
var dadosListaNome = [];
var dadosListaCargo = [];
var dadosListaLocal = [];
var dadosListaSit = [];
var dadosListaVotos = [];
var dadosListaGen = [];
var dadosListaUe = [];

function rodarQueryCandidatos(){
    
    for (var x=0;x<100;x++){
        estado = document.forms[1]['estadoCandidato'].value;
        ano = document.forms[0]['anoCandidato'].value;
        var numero = x.toString();
        var nomeCampo = "('"+estado+"', "+numero+")";
        var nome;
        firebase.database().ref(1945).child(nomeCampo).once('value',(snap)=>{
            
            nome = snap.val();
            dadosLista.push(nome['NM_CANDIDATO']);
            dadosListaNome.push(nome['NM_URNA_CANDIDATO']);
            dadosListaCargo.push(nome['DS_CARGO']);
            dadosListaLocal.push(nome['SG_UF']);
            dadosListaSit.push(nome['DS_SIT_TOT_TURNO']);
            
            dadosListaVotos.push(nome['QT_VOTOS_NOMINAIS']);
            dadosListaGen.push(nome['DS_GENERO']);
            dadosListaUe.push(nome['NM_MUNICIPIO']);
            
            listaGeral.push(dadosLista);
            listaGeral.push(dadosListaNome);
            listaGeral.push(dadosListaCargo);
            listaGeral.push(dadosListaLocal);
            listaGeral.push(dadosListaSit);
            listaGeral.push(dadosListaVotos);
            listaGeral.push(dadosListaGen);
            listaGeral.push(dadosListaUe);
            
        });
        
        
    };
    
    if(document.getElementById('bodycandidato').childNodes.length>=2){
        for (var z = 2;z<document.getElementById('bodycandidato').childNodes.length;z++){
            document.getElementById('bodycandidato').removeChild(document.getElementById('bodycandidato').childNodes[z]);
        }
    }

    document.getElementById('anoGeralEleicoes').innerHTML = 'Eleições '+ano.toString();
    document.getElementById('descricaoAnoGeral').innerHTML = 'Eleições Gerais de '+ano.toString();
    setTimeout(function() {
        gerarListaCandidatos(listaGeral);

    }, (3 * 1000));
    
};

