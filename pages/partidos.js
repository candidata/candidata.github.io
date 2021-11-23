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


// FIM FIREBASE //

var jsonPartidos = {
    "PT": {
      "nmPartidoCompleto": "Partido dos Trabalhadores",
      "nrPartido": "13"
    },
    "PSDB": {
      "nmPartidoCompleto": "Partido da Social Democracia Brasileira",
      "nrPartido": "45"
    },
    "DEM": {
      "nmPartidoCompleto": "Democratas ",
      "nrPartido": "25"
    },
    "NOVO": {
      "nmPartidoCompleto": "Partido NOVO",
      "nrPartido": "30"
    },
    "PSOL": {
      "nmPartidoCompleto": "Partido Socialismo e Liberdade",
      "nrPartido": "50"
    },
    "MDB": {
      "nmPartidoCompleto": "Movimento Democrático Brasileiro",
      "nrPartido": "15"
    },
    "PSL": {
      "nmPartidoCompleto": "Partido Social Liberal",
      "nrPartido": "17"
    },
    "PSB": {
      "nmPartidoCompleto": "Partido Socialista Brasileiro",
      "nrPartido": "40"
    },
    "PCDOB": {
      "nmPartidoCompleto": "Partido Comunista do Brasil",
      "nrPartido": "65"
    },
    "PV": {
      "nmPartidoCompleto": "Partido Verde",
      "nrPartido": "43"
    },
    "PDT": {
      "nmPartidoCompleto": "Partido Democrático Trabalhista",
      "nrPartido": "12"
    },
    "ARENA": {
      "nmPartidoCompleto": "Aliança Renovadora Nacional",
      "nrPartido": ""
    },
    "UDN": {
      "nmPartidoCompleto": "União Democrática Nacional",
      "nrPartido": "12"
    },
    "PP": {
      "nmPartidoCompleto": "Partido Progressista",
      "nrPartido": "11"
    }
  };

var listaGeral = [];
var dadosLista = [];
var dadosListaNome = [];
var dadosListaGenero = [];
var dadosListaCargo = [];
var dadosListaLocal = [];
var dadosListaCidade = [];
var dadosListaSit = [];
var dadosListaVotos = [];


function mudarHeaderRodarCoisas(){
    var partido = document.forms[0]['partidoEleicao'].value;
    var anoEleicao = document.forms[1]['anoEleicao'].value;
    var nomeCompletoPartido = jsonPartidos[partido]['nmPartidoCompleto'];
    var numeroPartido = jsonPartidos[partido]['nrPartido'];
    var imagemPartido = "../icons/"+partido.toLowerCase()+".png";
    document.getElementById('nomeCompletoPartido').innerHTML = nomeCompletoPartido;
    document.getElementById('nomeNumeroPartido').innerHTML = partido+" ("+numeroPartido+")";
    document.getElementById('headerCandidatos').innerHTML = 'CANDIDATOS '+anoEleicao;
    document.getElementById('imagemPartido').src = imagemPartido;

    listaGeral = [];
    dadosLista = [];
    dadosListaNome = [];
    dadosListaGenero = [];
    dadosListaCargo = [];
    dadosListaLocal = [];
    dadosListaCidade = [];
    dadosListaSit = [];
    dadosListaVotos = [];
    rodarQueryCandidatos(partido);

}

function gerarListaCandidatos(listaGeral){
    
    
    for (var i=0;i<listaGeral[0].length;i++){
        var tdBodyCand = document.getElementById('bodycandidato');
        var tdCand = document.getElementById('candidato'); // pega o td do candidato
        
        var novocand = tdCand.cloneNode(true);
        novocand.id = 'teste';

        if(listaGeral[0]!=undefined){
            tdBodyCand.appendChild(novocand);
            var res = document.querySelectorAll('tr')[2+i];

            var nomeCandidato = listaGeral[0][i];
            var nmUrnaCandidato = listaGeral[1][i];
            var cargoCandidato = listaGeral[2][i];
            var sgUFcandidato = listaGeral[3][i];
            var sitCandidato = listaGeral[4][i];
            var votosCandidato = listaGeral[5][i];
            var cidadeCandidato = listaGeral[6][i];
    
            // document.querySelectorAll('#botaoModal')[1].dataset['bsTarget'] = "#perfil"+i.toString();
            res.querySelectorAll('h6')[0].innerHTML = nmUrnaCandidato;
            
            // nmCandidato
            res.querySelectorAll('p')[0].innerHTML = nomeCandidato;
            
            // cargo
            res.querySelectorAll('p')[1].innerHTML = cidadeCandidato;
            
            // local
            res.querySelectorAll('p')[2].innerHTML = sgUFcandidato;
            
            // sit
            // mudar aqui para inglês
            res.querySelectorAll('span')[0].innerHTML = sitCandidato;
            if(sitCandidato!='ELEITO' && sitCandidato!='ELEITO POR QP'){
                res.querySelectorAll('span')[0].classList.replace('bg-gradient-success','bg-gradient-secondary');
            }
            // votos
    
            res.querySelectorAll('span')[1].innerHTML = votosCandidato;
            res.querySelectorAll('span')[2].innerHTML = cargoCandidato;
            
        }
        
    };
    
};

function rodarQueryCandidatos(partido){
    
    for (var x=0;x<100;x++){
        var anoEleicao = document.forms[1]['anoEleicao'].value;
        var estado = 'AL'+anoEleicao;
        var numero = x.toString();
        var nomeCampo = "('"+estado+"', "+numero+")";
        var nome;
        firebase.database().ref(nomeCampo).once('value',(snap)=>{
            
            nome = snap.val();
            if(nome['SG_PARTIDO'].toUpperCase()==partido){
                dadosLista.push(nome['NM_CANDIDATO']);
                dadosListaNome.push(nome['NM_URNA_CANDIDATO']);
                dadosListaCargo.push(nome['DS_CARGO']);
                dadosListaLocal.push(nome['SG_UF']);
                dadosListaCidade.push(nome['NM_UE']);
                dadosListaSit.push(nome['DS_SIT_TOT_TURNO']);
                dadosListaVotos.push(nome['QT_VOTOS_NOMINAIS']);
                
                listaGeral.push(dadosLista);
                listaGeral.push(dadosListaNome);
                listaGeral.push(dadosListaCargo);
                listaGeral.push(dadosListaLocal);
                listaGeral.push(dadosListaSit);
                listaGeral.push(dadosListaVotos);
                listaGeral.push(dadosListaCidade);
                
            }
            else{
                console.log(nome['SG_PARTIDO']);
            }

            
            
        });
        
        
    };
    
    if(document.getElementById('bodycandidato').childNodes.length>=1){
        for (var z = 2;z<document.getElementById('bodycandidato').childNodes.length;z++){
            document.getElementById('bodycandidato').removeChild(document.getElementById('bodycandidato').childNodes[z]);
        }
    }

   
    setTimeout(function() {
        gerarListaCandidatos(listaGeral);

    }, (3 * 1000));
    
};