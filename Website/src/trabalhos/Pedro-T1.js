import React, { Component } from 'react';

const PedroT1 = () => {
    const preStyle = {
        whiteSpace: 'pre-line'
    };
    const text = `
    Good Design vs Bad Design

    Good Design
    
    iOS 4 (Software de fábrica Iphone 4)
    
    Objectivo da Interface ?
    
    O iOS 4 tinha em mente um objectivo claro, ser o mais fácil possível de usar.
    Para tal efeito a interface era incrivelmente simples, baseando-se apenas em pequenos ícones com designs modernos e minimalistas.
    
    Bons e Maus aspetos ?
    
    Uma das grandes vantagens do iOS 4 face aos sistemas operativos (mobile) da época era o facto de ter um uso intuitivo. 
    Por exemplo no android a organização era muito mais complicada por ter mais funcionalidades (que por vezes não eram necessárias) dificultando a utilização (User Experience pior).
    Exemplo Android : https://images.anandtech.com/doci/4059/NS-HomePage.png
    No exemplo acima é visível que o Android tinha muito mais ícones e funcionalidades visíveis, o que se poderia tornar confuso para um utilizador
    que não esteja acostumado a utilizar smartphones (na época era muito comum tendo em conta que em 2010 os smartphones começaram a ganhar uma maior
    taxa de adesão a nível global).
    Exemplo IOS : https://www.cultofmac.com/wp-content/uploads/2010/06/springboardOS4.jpg
    No exemplo apresentado para o IOS, facilmente se consegue perceber que mesmo existindo mais aplicações instaladas que existe uma maior organização.
    Para além da organização, o facto de os dispositivos IOS utilizarem o botão físico para aceder a outros menus conferiu ao IOS 4 um uso mais intuitivo
    (Nos dispositivos android os botões de voltar atrás e de acesso a outros menus estão quase sempre incorporados no Sistema Operativo).
    
    Porque é boa ? Porque é má ?
    
    Tendo em conta que todos os sistemas operativos mobile ganharam uma grande parte da sua adesão no começo (2010~2012), era muito importante causar uma boa impressão. Assim, a intuitividade que existe no IOS4 conferiu à Apple um lugar no topo da indústria mobile, uma vez que na época era difícil encontrar um smartphone que fosse fácil de utilizar (que não obriga-se o utilizador a perder meses a tentar perceber os aspetos mais importantes da interface), assim esse mesmo aspeto tornou-se um dos pontos fortes do IOS4.
    No entanto, apesar do IOS4 ter definido muitos padrões de utilização, por exemplo, quais as funcionalidades visíveis, como é que a organização deve ser feita, design gráfico, etc. Considero que a forma como as aplicações são apagadas poderia ser diferente. 
    Esta funcionalidade foi desde sempre um pouco obscura, do ponto de vista de utilização, porque obrigava quase sempre os utilizadores a perguntarem a alguém que utiliza-se iphone ou até mesmo a pesquisar na internet como é que o processo poderia ser efetuado.
    
    O que poderia melhorar nos casos maus ? Porque foi desenhada assim ?
    
    Para melhorar o sistema que permite apagar aplicações deveria existir algo semelhante ao Windows, ou seja, um ícone de um contentor em que se poderia apenas arrastar as aplicações indesejadas para lá, tornando-se a interface mais intuitiva e interativa (melhoraria a UX).
    O motivo pela qual este sistema foi concebido desta forma acaba por ser pouco óbvio, mas diria que está diretamente relacionado com o facto de que na época a Apple queria dar o máximo de uso ao único botão físico que existia no iphone, de forma a torná-lo distinguível de todos os outros smartphones da época.
    
    Bad Design
    
    Microsoft Windows Phone 8 (Software Nokia Lumia 520)
    
    Objectivos da interface ?
    
    O OS Microsoft Windows Phone (neste caso 8) queria conferir aos utilizadores uma experiencia de utilização semelhante à do Windows, no entanto num ambiente mobile.
    Outro objectivo da interface deste OS seria tornar a UX (user experience) mais direta, derivando deste mesmo facto o menu principal inundado de ícones.
    
    Bons e Maus aspetos ?
    
    Apesar de ser um pouco confusa, a interface acaba por ser bastante moderna conferindo várias funcionalidades que até então não existiam em mais nenhum sistema operativo.
    Relativamente aos maus aspetos, como dito anteriormente a interface tenta adaptar-se a um tema mais moderno. No entanto acaba por ter demasiados atalhos no menu principal, tornando o Sistema operativo confuso e pouco organizado.
    Ainda se pode referir que na época em que este OS foi lançado que já existia um certo padrão nas interfaces Sistemas operativos o que, contribuiu para que a interface se torna-se ainda mais confusa.
    
    Porque é boa ? Porque é má ?
    
    O ponto forte da interface é o acesso direto às aplicações o que, no caso dos utilizadores que se adaptam com mais facilidade a interfaces mais complexas, acaba por permitir uma maior velocidade na execução de quaisquer tarefas no dispositivo.
    O ponto fraco da interface acaba por ser a curva de aprendizagem descomunal. Esta curva de aprendizagem torna a User Experience exponencialmente pior, sendo um ponto crítico para este sistema operativo (que acabou por ser recentemente descontinuado).
    
    O que poderia melhorar nos casos maus ? Porque foi desenhada assim ?
    
    A meu ver, a solução ideal para este OS seria tentar criar algo mais semelhante ao design do Android, em que existe um menu principal com um limite de aplicações e que permita a criação de várias páginas que precisam apenas de um "scroll" para que se possa aceder às mesmas.`;

    return (
    <div>
        <center><h1> Trabalho 1 </h1>
        <pre style={preStyle}><h3>{text}</h3></pre></center>
    </div>);
};

export default PedroT1;