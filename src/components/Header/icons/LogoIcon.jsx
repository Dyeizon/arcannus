import './../style.css';

export const LogoIcon = () => {
    return (
        <button className='logo-icon-button'><a className="logo-icon-a" href="/"><img src={require('./../../../assets/img/favicon.ico')} alt="Logotipo: Imagem de duas cartas de tarô"/></a></button>
    );
}