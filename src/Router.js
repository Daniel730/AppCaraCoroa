import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CenaPrincipal from './components/CenaPrincipal';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';
import SobreJogo from './components/SobreJogo';

const Routes = () => (
    <Router sceneStyle={{paddingTop: 50}}>
        <Scene key='principal' component={CenaPrincipal} initial title="Cara ou Coroa APP" />
        <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
        <Scene key='outrosjogos' component={OutrosJogos} title="Outros jogos de Dan" />
        <Scene key='resultado' component={Resultado} title="Resultado" />
    </Router>
)

export default Routes;