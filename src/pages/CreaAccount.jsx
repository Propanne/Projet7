import '../styles/login_crea_account.scss'
import { Helmet } from 'react-helmet';
import logoGroupomania from '../assets/icon-left-font-monochrome-white.svg';
import { useForm } from "react-hook-form";

function CreaAccount() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Handle submit button
    const onSubmit = data => alert(JSON.stringify(data));
    return (
      <div className="global-container">
        <div className="row authHeader-container">
          <h1 className="authHeader-title">Création de compte</h1>
        </div>
        <div id="login-global-container" className="row">
          <Helmet>
              <title>Création de compte - Groupomania</title>
          </Helmet>
          <div className="col-md-4 col-sm-1 col-1"></div>
          <div id="login_card" className="col-md-4 col-sm-10 col-10">
            <form onSubmit={handleSubmit(onSubmit)} className="container text-align-center">
              <div className="mb-3 mt-3 text-align-left">
                <label htmlFor="email" className="form-label">Adresse mail:</label>
                <input type="email" className="form-control" id="email" placeholder="Saisissez votre adresse mail ..." {...register("email")} />
              </div>
              <div className="mb-3 text-align-left">
                <label htmlFor="pwd" className="form-label">Mot de passe:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Saisissez votre mot de passe ..." {...register("pswd")}/>
              </div>
              <button type="submit" className="bg-color-secondary font-color-tertiary login-button login-button-border btn btn-primary">S'inscrire</button>
            </form>
            <p id="accountCreateText">Vous disposez déjà d'un compte entreprise ? <a id="accountCreateLink" href="/auth/login">Connectez vous en cliquant ici.</a></p>
          </div>
          <div className="col-md-4 col-sm-1 col-1"></div>
        </div>
        <div id="logoContainer"className="row">
          <img id="bottomCompanyLogo" src={logoGroupomania} alt="logo d'entreprise Groupomania"/>
        </div>
      </div>
    )
}

export default CreaAccount
